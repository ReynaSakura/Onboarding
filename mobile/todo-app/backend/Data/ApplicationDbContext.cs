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
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Label>().HasData(
            new Label { Id = 1, Name = "HouseWork"},
            new Label { Id = 2, Name = "HomeWork"}
        );

        modelBuilder.Entity<TaskItem>().HasData(
            new TaskItem 
            { 
                Id = 1, 
                Title = "Buy grocery", 
                Description = "Buy Milk, Cookie, Chocolate", 
                IsCompleted = false, 
                CreatedAt = new DateTime(2026, 3, 8),
                LabelId = 1 
            },
            new TaskItem 
            { 
                Id = 2, 
                Title = "Learning EF Core", 
                Description = "Watch the tutorial", 
                IsCompleted = true, 
                CreatedAt = new DateTime(2026, 3, 7),
                LabelId = 2
            }
        );
    }
}