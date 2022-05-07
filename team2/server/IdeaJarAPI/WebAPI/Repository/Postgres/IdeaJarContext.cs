using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Repository.Postgres
{
    public class IdeaJarContext : DbContext
    {
        public IdeaJarContext(DbContextOptions<IdeaJarContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("user");
        }
    }
}
