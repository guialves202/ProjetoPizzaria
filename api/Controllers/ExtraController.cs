using api.Models;
using api.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
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
            List<ExtraModel> extras = await _extraRepository.index();
            return Ok(extras);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ExtraModel>> show(int id)
        {
            ExtraModel extra = await _extraRepository.show(id);
            return Ok(extra);
        }

        [HttpPost]
        public async Task<ActionResult<ExtraModel>> store([FromBody] ExtraModel extra)
        {
            ExtraModel extraStored = await _extraRepository.store(extra);
            return Ok(extraStored);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ExtraModel>> update([FromBody] ExtraModel extra, int id)
        {
            ExtraModel extraUpdated = await _extraRepository.update(extra, id);
            return Ok(extraUpdated);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> delete(int id)
        {
            bool extraWasDeleted = await _extraRepository.delete(id);
            return Ok(extraWasDeleted);
        }
    }
}
