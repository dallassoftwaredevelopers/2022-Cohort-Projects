using WebAPI.DTOs;
using WebAPI.Models;

namespace WebAPI.Services
{
    public interface IUserService
    {
        Task<UserManagerResponseDTO> RegisterUser(RegisterDTO registerDTO);

        Task<UserManagerResponseDTO> LoginUser(LoginDTO loginDTO);

        Task<UserManagerResponseDTO> ConfirmEmail(string userId, string token);

        Task<UserManagerResponseDTO> ForgotPassword(string email);

        Task<UserManagerResponseDTO> ResetPassword(ResetPasswordViewModel model);
    }
}