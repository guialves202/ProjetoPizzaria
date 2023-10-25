using api.Models;
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
            List<ClientModel> clients = await _clientRepository.index();
            return Ok(clients);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ClientModel>> show(int id)
        {
            ClientModel client = await _clientRepository.show(id);
            return Ok(client);
        }

        [HttpPost]
        public async Task<ActionResult<ClientModel>> store([FromBody] ClientModel client)
        {
            ClientModel clientStored = await _clientRepository.store(client);
            return Ok(clientStored);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ClientModel>> update([FromBody] ClientModel client, int id)
        {
            ClientModel clientUpdated = await _clientRepository.update(client, id);
            return Ok(clientUpdated);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> delete(int id)
        {
            bool clientWasDeleted = await _clientRepository.delete(id);
            return Ok(clientWasDeleted);
        }
    }
}
