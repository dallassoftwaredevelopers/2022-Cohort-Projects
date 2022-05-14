using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.DTOs;
using System.Security.Cryptography;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [Route("Api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IEmailService _emailService;
        private readonly IConfiguration _configuration;


        public AuthController(IUserService userService, IEmailService emailService, IConfiguration configuration)
        {
            _userService = userService;
            _emailService = emailService;
            _configuration = configuration;
        }


        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody]RegisterDTO registrationDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest("Some properties are not valid");

            var output = await _userService.RegisterUser(registrationDTO);

            if (output.IsSuccess)
                return Ok(output);

            return BadRequest(output);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO loginDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest("Some properties are not valid");

            var output = await _userService.LoginUser(loginDTO);

            if (!output.IsSuccess)
                return BadRequest(output);

            await _emailService.SendEmail(
                toEmail: output.Email, 
                subject: "New Login Notification", 
                context: $"<h3>New Login</h3> <p>New login to your account noticed at {DateTime.Now}.</p>");

            return Ok(output);
        }

        [HttpGet("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string userId, string token)
        {
            if (string.IsNullOrWhiteSpace(userId) || string.IsNullOrWhiteSpace(token))
                return NotFound();

            var result = await _userService.ConfirmEmail(userId, token);

            if (!result.IsSuccess)
                return BadRequest(result);

            return Redirect($"{_configuration["APP_URL"]}/ConfirmEmail.html");
        }

        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword(string email)
        {
            if (string.IsNullOrEmpty(email))
                return NotFound();

            var result = await _userService.ForgotPassword(email);

            if (!result.IsSuccess)
                return BadRequest(result);

            return Ok(result);
        }

        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword([FromForm]ResetPasswordViewModel viewModel)
        {
            if (!ModelState.IsValid)
                return BadRequest("Some properties are not valid");

            var output = await _userService.ResetPassword(viewModel);
            if (!output.IsSuccess)
                return BadRequest(output);

            return Ok(output);
        }
    }
}
