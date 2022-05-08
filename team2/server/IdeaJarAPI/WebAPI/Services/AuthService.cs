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
    public class AuthService
    {
        private readonly UsersRepository _userRepo;
        private readonly IConfiguration _configuration;

        public AuthService(UsersRepository userRepo, IConfiguration configuration)
        {
            _userRepo = userRepo;
            _configuration = configuration;
        }

        public User RegisterHandler(UserDTO request)
        {
            // TODO
            var emailValidator = new EmailAddressAttribute();
            if (!emailValidator.IsValid(request.Email))
                return null;

            Func<string, (byte[] salt, byte[] hash)> createPasswordHash = (password) =>
            {
                using (var hmac = new HMACSHA512())
                {
                    var salt = hmac.Key;
                    var hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));

                    return (salt, hash);
                }
            };

            (var passwordSalt, var passwordHash) = createPasswordHash(request.Password);

            var user = new User
            {
                Username = request.Username,
                Email = request.Email,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };

            return _userRepo.CreateUser(user);
        }

        public string LoginHandler(UserDTO request)
        {
            var user = _userRepo.GetByUsername(request.Username);

            if (user == null || !VerifyPassword(request.Password, user.PasswordHash, user.PasswordSalt))
                return string.Empty;

            var token = CreateToken(user);

            return token;
        }

        private bool VerifyPassword(string password, byte[] hash, byte[] salt)
        {
            var passwordBytes = Encoding.ASCII.GetBytes(password);

            using (var hmac = new HMACSHA512(salt))
            {
                var computedHash = hmac.ComputeHash(passwordBytes);

                return computedHash.SequenceEqual(hash);
            }
        }

        private string CreateToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
            var credential = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(14),
                signingCredentials: credential);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
    }
}
