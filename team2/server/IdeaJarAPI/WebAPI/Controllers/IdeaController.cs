using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdeaController : ControllerBase
    {
        private static readonly string[] Ideas = new[]
        {
            "Go to Theaters", "Stay Home", "Road Trip", "Any", "Indoors", "Outdoors"
        };
        [Authorize]
        [HttpGet("GetAll")]
        public IEnumerable<string> Get() => Ideas.ToArray();
    }
}
