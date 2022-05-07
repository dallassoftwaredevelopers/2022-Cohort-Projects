using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.DTOs;
using System.Security.Cryptography;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using System.Text;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public static User user = new User();
        private readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration)
        {
            this._configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(UserDTO request)
        {
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            var passwordHashString = Encoding.ASCII.GetString(passwordHash);
            var passwordSaltString = Encoding.ASCII.GetString(passwordSalt);

            user.Username = request.Username;
            user.PasswordHash = passwordHashString;
            user.PasswordSalt = passwordSaltString;

            return Ok(user);
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login (UserDTO request)
        {
            var passwordHashBytes = Encoding.ASCII.GetBytes(user.PasswordHash);
            var passwordSaltBytes = Encoding.ASCII.GetBytes(user.PasswordSalt);

            if (user.Username != request.Username || !VerifyPasswordHash(request.Password, passwordHashBytes, passwordSaltBytes))
                return BadRequest("Wrong username/password combination.");

            // TODO:
            //if (!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
            //    return BadRequest("Wrong password.");

            string token = CreateToken(user);
            return Ok(token);
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            var passwordBytes = Encoding.ASCII.GetBytes(password);
            var passwordHashBytes = Encoding.ASCII.GetBytes(user.PasswordHash);
            var passwordSaltBytes = Encoding.ASCII.GetBytes(user.PasswordSalt);

            using (var hmac = new HMACSHA512(passwordSaltBytes))
            {
                var computedHash = hmac.ComputeHash(passwordBytes);

                return computedHash.SequenceEqual(passwordHashBytes);
            }
        }

        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
            var credential = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credential);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
    }
}
