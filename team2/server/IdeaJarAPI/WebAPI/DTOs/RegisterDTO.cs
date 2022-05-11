using System.ComponentModel.DataAnnotations;

namespace WebAPI.DTOs
{
    public class RegisterDTO
    {
        [Required]
        [StringLength(50)]
        public string Username { get; set; }

        [Required]
        [StringLength(50)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(50), MinLength(8)]
        public string Password { get; set; }

        [Required]
        [StringLength(50), MinLength(8)]
        public string ConfirmPassword { get; set; }
    }
}
