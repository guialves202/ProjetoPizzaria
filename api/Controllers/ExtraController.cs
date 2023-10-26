using api.Exceptions;
using api.Models;
using api.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExtraController : ControllerBase
    {
        private readonly IExtraRepository _extraRepository;
        public ExtraController(IExtraRepository extraRepository)
        {
            _extraRepository = extraRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<ExtraModel>>> index()
        {
            try
            {
                List<ExtraModel> extras = await _extraRepository.index();
                return Ok(extras);
            }
            catch (Exception ex) 
            {
                return StatusCode(500, ex);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ExtraModel>> show(int id)
        {
            try
            {
                ExtraModel extra = await _extraRepository.show(id);
                if (extra == null) 
                {
                    return NotFound("Extra not found");
                }
                return Ok(extra);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPost]
        public async Task<ActionResult<ExtraModel>> store([FromBody] ExtraModel extra)
        {
            try
            {
                ExtraModel extraStored = await _extraRepository.store(extra);
                return Ok(extraStored);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ExtraModel>> update([FromBody] ExtraModel extra, int id)
        {
            try
            {
                ExtraModel extraUpdated = await _extraRepository.update(extra, id);
                return Ok(extraUpdated);
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
                bool extraWasDeleted = await _extraRepository.delete(id);
                return Ok(extraWasDeleted);
            }
            catch (HttpException ex)
            {
                return StatusCode(ex.HttpCode, ex.Message);
            }
        }
    }
}
