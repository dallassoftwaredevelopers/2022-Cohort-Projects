using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using WebAPI.DTOs;
using WebAPI.Models;
using WebAPI.Repositories;

namespace WebAPI.Services
{
    public class UserService : IUserService
    {
        private readonly IConfiguration _configuration;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IEmailService _emailService;

        public UserService(IConfiguration configuration, UserManager<IdentityUser> userManager, IEmailService emailService)
        {
            _configuration = configuration;
            _userManager = userManager;
            _emailService = emailService;
        }

        public async Task<UserManagerResponseDTO> RegisterUser(RegisterDTO registrationDTO)
        {
            if (registrationDTO == null) throw new NullReferenceException("Register model is null");

            if (registrationDTO.Password != registrationDTO.ConfirmPassword)
                return new UserManagerResponseDTO
                {
                    Message = "Confirm password doesn't match the password",
                    IsSuccess = false
                };

            var identityUser = new IdentityUser
            {
                Email = registrationDTO.Email,
                UserName = registrationDTO.Username
            };

            var output = await _userManager.CreateAsync(identityUser, registrationDTO.Password);

            if (output.Succeeded)
            {
                var confirmEmailToken = await _userManager.GenerateEmailConfirmationTokenAsync(identityUser);
                var encodedEmailToken = Encoding.UTF8.GetBytes(confirmEmailToken);
                var validEmailToken = WebEncoders.Base64UrlEncode(encodedEmailToken);

                string url = $"{_configuration["AppUrl"]}/Api/Auth/ConfirmEmail?userid={identityUser.Id}&token={validEmailToken}";
                await _emailService.SendEmail(identityUser.Email, "Confirm your email",
                    $"<h1>Welcome to the Idea Jar App</h1><p>Please confirm your email by <a href='{url}'>Clicking here</a></p>");

                return new UserManagerResponseDTO
                    {
                        Message = "User created successfully!",
                        IsSuccess = true
                    };
                }
                

            return new UserManagerResponseDTO
            {
                Message = "User was not created",
                IsSuccess = false,
                Errors = output.Errors.Select(e => e.Description)
            };
        }

        public async Task<UserManagerResponseDTO> LoginUser(LoginDTO loginDTO)
        {
            var user = await _userManager.FindByNameAsync(loginDTO.Username);

            if (user == null)
                return new UserManagerResponseDTO
                {
                    Message = "The username provided does not exist",
                    IsSuccess = false
                };

            var output = await _userManager.CheckPasswordAsync(user, loginDTO.Password);

            if (!output)
                return new UserManagerResponseDTO
                {
                    Message = "Invalid password",
                    IsSuccess = false
                };

            var claims = new Claim[]
            {
                new Claim("UserName", loginDTO.Username),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["AppSettings:Token"]));
            var credential = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["AppSettings:Issuer"],
                audience: _configuration["AppSettings:Audience"],
                claims: claims,
                expires: DateTime.Now.AddDays(14),
                signingCredentials: credential
                );

            var tokenAsString = new JwtSecurityTokenHandler().WriteToken(token);

            return new UserManagerResponseDTO
            {
                Message = tokenAsString,
                IsSuccess = true,
                ExpireDate = token.ValidTo,
                Email = user.Email
            };
        }

        public async Task<UserManagerResponseDTO> ConfirmEmail(string userId, string token)
        {
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
                return new UserManagerResponseDTO
                {
                    IsSuccess = false,
                    Message = "User not found",

                };
           
            var decodedToken = WebEncoders.Base64UrlDecode(token);
            string normalToken = Encoding.UTF8.GetString(decodedToken);

            var result = await _userManager.ConfirmEmailAsync(user, normalToken);

            if (result.Succeeded)
                return new UserManagerResponseDTO
                {
                    Message = "Email confirmed successfully!",
                    IsSuccess = true
                };

            return new UserManagerResponseDTO
            {
                IsSuccess = false,
                Message = "Email did not confirm",
                Errors = result.Errors.Select(e => e.Description)
            };
        }

        public async Task<UserManagerResponseDTO> ForgotPassword(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
                return new UserManagerResponseDTO
                {
                    IsSuccess = false,
                    Message = "No user is associated with that email"
                };

            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            var encodedToken = Encoding.UTF8.GetBytes(token);
            var validToken = WebEncoders.Base64UrlEncode(encodedToken);

            var url = $"{_configuration["AppUrl"]}/ResetPassword?email={email}&token={validToken}";

            await _emailService.SendEmail(email, "Reset Password",
                "<h1>Follow the instructions to reset your password</h1>" +
                $"<p>To reset your password <a href='{url}'>Click here</a></p>");

            return new UserManagerResponseDTO
            {
                IsSuccess = true,
                Message = "Reset password URL has been sent to the email successfully!"
            };
        }

        public async Task<UserManagerResponseDTO> ResetPassword(ResetPasswordViewModel viewModel)
        {
            var user = await _userManager.FindByEmailAsync(viewModel.Email);
            if (user == null)
                return new UserManagerResponseDTO
                {
                    IsSuccess = false,
                    Message = "No user associated with that email"
                };

            if (viewModel.NewPassword != viewModel.ConfirmPassword)
                return new UserManagerResponseDTO
                {
                    IsSuccess = false,
                    Message = "Passwords do not match"
                };

            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            var output = await _userManager.ResetPasswordAsync(user, token, viewModel.NewPassword);

            if (!output.Succeeded)
                return new UserManagerResponseDTO
                {
                    IsSuccess = false,
                    Message = "Something went wrong",
                    Errors = output.Errors.Select(e => e.Description)
                };

            return new UserManagerResponseDTO
            {
                IsSuccess = true,
                Message = "Password has been reset successfully"
            };

        }
    }
}
