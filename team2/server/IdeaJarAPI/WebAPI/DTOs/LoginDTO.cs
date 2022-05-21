using System.ComponentModel.DataAnnotations;

namespace WebAPI.DTOs
{
    public class LoginDTO
    {
        [Required]
        [StringLength(50)]
        public string Username { get; set; }

        [Required]
        [StringLength(50), MinLength(8)]
        public string Password { get; set; }
    }
}