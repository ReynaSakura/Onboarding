using Microsoft.EntityFrameworkCore;
using TodoApi.Models;
namespace TodoApi.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }
    
    public DbSet<Label> Labels { get; set; }
    public DbSet<TaskItem> TaskItems  { get; set; }
}