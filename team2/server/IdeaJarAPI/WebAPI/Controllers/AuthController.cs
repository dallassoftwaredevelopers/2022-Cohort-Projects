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
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public ActionResult<User> Register(UserDTO request)
        {
            var user = _authService.RegisterHandler(request);

            if (user == null)
                return BadRequest("Invalid Email");

            return Ok(user);
        }

        [HttpPost("login")]
        public ActionResult<string> Login (UserDTO request)
        {
            var token = _authService.LoginHandler(request);

            if (token == string.Empty)
                return BadRequest("Wrong username or password.");

            return Ok(token);
        }
    }
}
