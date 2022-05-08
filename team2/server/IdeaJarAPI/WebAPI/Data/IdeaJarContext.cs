using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class IdeaJarContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public IdeaJarContext(DbContextOptions<IdeaJarContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseSerialColumns();
        }
    }
}
