using api.Exceptions;
using api.Models;
using api.Repositories;
using api.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly IClientRepository _clientRepository;
        public ClientController(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<ClientModel>>> index()
        {
            try
            {
                List<ClientModel> clients = await _clientRepository.index();
                return Ok(clients);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ClientModel>> show(int id)
        {
            try
            {
                ClientModel client = await _clientRepository.show(id);
                if (client == null)
                {
                    return NotFound("Client not found");
                }
                return Ok(client);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPost]
        public async Task<ActionResult<ClientModel>> store([FromBody] ClientModel client)
        {
            try
            {
                ClientModel clientStored = await _clientRepository.store(client);
                return Ok(clientStored);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ClientModel>> update([FromBody] ClientModel client, int id)
        {
            try
            {
                ClientModel clientUpdated = await _clientRepository.update(client, id);
                return Ok(clientUpdated);
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
                bool clientWasDeleted = await _clientRepository.delete(id);
                return Ok(clientWasDeleted);
            }
            catch (HttpException ex)
            {
                return StatusCode(ex.HttpCode, ex.Message);
            }
        }
    }
}
