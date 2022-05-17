namespace WebAPI.Services
{
    public interface IEmailService
    {
        Task SendEmail(string toEmail, string subject, string context);
    }
}
