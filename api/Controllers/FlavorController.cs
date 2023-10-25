using api.Exceptions;
using api.Models;
using api.Repositories.Interfaces;
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
            try
            {
                List<FlavorModel> flavors = await _flavorRepository.index();
                return Ok(flavors);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }  
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<FlavorModel>> show(int id)
        {
            try
            {
                FlavorModel flavor = await _flavorRepository.show(id);
                if (flavor == null)
                {
                    return NotFound("Flavor not found");
                }
                return Ok(flavor);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPost]
        public async Task<ActionResult<FlavorModel>> store([FromBody] FlavorModel flavor)
        {
            try
            {
                FlavorModel flavorStored = await _flavorRepository.store(flavor);
                return Ok(flavorStored);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<FlavorModel>> update([FromBody] FlavorModel flavor, int id)
        {
            try
            {
                FlavorModel flavorUpdated = await _flavorRepository.update(flavor, id);
                return Ok(flavorUpdated);
            }
            catch (HttpException ex)
            {
                return StatusCode(ex.HttpCode, ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> delete(int id)
        {
            try
            {
                bool flavorWasDeleted = await _flavorRepository.delete(id);
                return Ok(flavorWasDeleted);
            }
            catch (HttpException ex)
            {
                return StatusCode(ex.HttpCode, ex.Message);
            }
        }
    }
}
