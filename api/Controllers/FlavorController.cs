using api.Models;
using api.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlavorController : ControllerBase
    {
        private readonly IFlavorRepository _flavorRepository;
        public FlavorController(IFlavorRepository flavorRepository)
        {
            _flavorRepository = flavorRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<FlavorModel>>> index()
        {
            List<FlavorModel> flavors = await _flavorRepository.index();
            return Ok(flavors);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<FlavorModel>> show(int id)
        {
            FlavorModel flavor = await _flavorRepository.show(id);
            return Ok(flavor);
        }

        [HttpPost]
        public async Task<ActionResult<FlavorModel>> store([FromBody] FlavorModel flavor)
        {
            FlavorModel flavorStored = await _flavorRepository.store(flavor);
            return Ok(flavorStored);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<FlavorModel>> update([FromBody] FlavorModel flavor, int id)
        {
            FlavorModel flavorUpdated = await _flavorRepository.update(flavor, id);
            return Ok(flavorUpdated);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> delete(int id)
        {
            bool flavorWasDeleted = await _flavorRepository.delete(id);
            return Ok(flavorWasDeleted);
        }
    }
}
