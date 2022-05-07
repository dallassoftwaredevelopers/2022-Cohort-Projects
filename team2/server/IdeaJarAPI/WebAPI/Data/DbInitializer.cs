using WebAPI.Models;

namespace WebAPI.Data
{
    public class DbInitializer
    {
        public static void Initialize(IdeaJarContext context)
        {
            // Look for any users
            if (context.Users.Any()) return;

            var users = new User[]
            {
                //new User { Username = "bob", Email = "bob@email.com", PasswordHash = "123", PasswordSalt = "456" },
                new User { Username = "sue", Email = "sue@email.com", PasswordHash = "1234", PasswordSalt = "4567" },
                //new User { Username = "jane", Email = "jane@email.com", PasswordHash = "12345", PasswordSalt = "45678" },
            };

            context.Users.AddRange(users);
            context.SaveChanges();
        }
    }
}
