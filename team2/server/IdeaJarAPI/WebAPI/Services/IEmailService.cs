using SendGrid;
using SendGrid.Helpers.Mail;

namespace WebAPI.Services
{
    public interface IEmailService
    {
        Task SendEmail(string toEmail, string subject, string context);
    }

    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;
        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendEmail(string toEmail,string subject, string content)
        {
            var apiKey = _configuration["SENDGRID_API_KEY"];
            var client = new SendGridClient(apiKey);

            var from = new EmailAddress("ideajar.app@gmail.com", "Idea Jar Support");
            var to = new EmailAddress(toEmail);

            var msg = MailHelper.CreateSingleEmail(from, to, subject, content, content);

            var response = await client.SendEmailAsync(msg);
        }
        
    }
}
