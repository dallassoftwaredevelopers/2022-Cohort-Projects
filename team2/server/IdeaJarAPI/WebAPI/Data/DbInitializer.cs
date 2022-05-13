using System.Text;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            // Look for any users
            if (context.Users.Any()) return;

            var users = new User[]
            {
                new User { Username = "bob", Email = "bobcom", PasswordHash = Encoding.ASCII.GetBytes("123"), PasswordSalt = Encoding.ASCII.GetBytes("456") },
            };

            context.Users.AddRange(users);
            context.SaveChanges();
        }
    }
}
