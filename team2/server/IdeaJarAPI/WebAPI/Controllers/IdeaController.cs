using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class IdeaController : ControllerBase
    {
        private static readonly string[] Ideas = new[]
        {
            "Go to Theaters", "Stay Home", "Road Trip", "Any", "Indoors", "Outdoors"
        };
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return Ideas.ToArray();
        }
    }
}
