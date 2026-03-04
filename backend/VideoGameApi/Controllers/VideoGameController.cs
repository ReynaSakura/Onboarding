using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace VideoGameApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class VideoGameController : ControllerBase
    {
        static private List<VideoGame> videoGames = new List<VideoGame>
        {
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

        };

        [HttpGet]
        public ActionResult<List<VideoGame>> GetVideoGames()
        {
            return Ok(videoGames);
        }
    
        [HttpGet("{id}")]
        public ActionResult<VideoGame> GetVideoGameById(int id)
        {
            var game = videoGames.FirstOrDefault(g => g.Id == id);
            if (game == null)
            {
                return NotFound();
            }
            return Ok(game);
        }

        [HttpPost]
        public ActionResult<VideoGame> AddVideoGame(VideoGame newGame)
        {
            if (newGame == null)
            {
                return BadRequest();
            }
            
            newGame.Id = videoGames.Max(g  => g.Id) + 1;
            videoGames.Add(newGame);
            return CreatedAtAction(nameof(GetVideoGameById), new { id = newGame.Id }, newGame);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateVideoGame(int id, VideoGame updatedGame)
        {
            var  game = videoGames.FirstOrDefault(g => g.Id == id);
            if (game == null)
            {
                return NotFound();
            }
            
            game.Title = updatedGame.Title;
            game.Platform = updatedGame.Platform;
            game.Developer = updatedGame.Developer;
            game.Publisher = updatedGame.Publisher;
            
            return NoContent();
        }
        // http://localhost:5111/scalar/v1
    }
}