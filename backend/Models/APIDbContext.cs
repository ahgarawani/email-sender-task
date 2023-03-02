using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class APIDbContext : DbContext
    {
        public APIDbContext(DbContextOptions option) : base(option)
        {
        }

        public DbSet<Email> Emails { get; set; }
    }
}
