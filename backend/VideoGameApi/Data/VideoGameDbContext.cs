using Microsoft.EntityFrameworkCore;

namespace VideoGameApi.Data;
    public class VideoGameDbContext(DbContextOptions<VideoGameDbContext> options) : DbContext(options)
    {
        public DbSet<VideoGame> VideoGames => Set<VideoGame>();
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<VideoGame>().HasData(
                new VideoGame
                {
                    Id = 1,
                    Title = "Genshin Impact",
                    Platform = "Laptop",
                    Developer = "Hoyoverse",
                    Publisher = "Mihoyo",
                },
                new VideoGame
                {
                    Id = 2,
                    Title = "The Legend of Zelda",
                    Platform = "Nintendo Switch",
                    Developer = "Nintendo EPD",
                    Publisher = "Nintendo"
                },
                new VideoGame
                {
                    Id = 3,
                    Title = "Love and Deepspace",
                    Platform = "Mobile",
                    Developer = "Infold Games",
                    Publisher = "Infold Games"
                }
            );

        }
    }
