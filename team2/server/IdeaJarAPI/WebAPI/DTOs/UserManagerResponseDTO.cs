using Microsoft.AspNetCore.Identity;

namespace WebAPI.DTOs
{
    public class UserManagerResponseDTO
    {
        public string Message { get; set; }
        public bool IsSuccess { get; set; }
        public IEnumerable<string> Errors { get; set; }

        public DateTime? ExpireDate { get; set; }
        public string? Email { get; set; }
    }
}
