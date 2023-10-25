using api.Models;
using api.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaController : ControllerBase
    {
        private readonly IPizzaRepository _pizzaRepository;
        public PizzaController(IPizzaRepository pizzaRepository)
        {
            _pizzaRepository = pizzaRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<PizzaModel>>> index()
        {
            List<PizzaModel> pizzas = await _pizzaRepository.index();
            return Ok(pizzas);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PizzaModel>> show(int id)
        {
            PizzaModel pizza = await _pizzaRepository.show(id);
            return Ok(pizza);
        }

        [HttpPost]
        public async Task<ActionResult<PizzaModel>> store([FromBody] PizzaModel pizza)
        {
            PizzaModel pizzaStored = await _pizzaRepository.store(pizza);
            return Ok(pizzaStored);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<PizzaModel>> update([FromBody] PizzaModel pizza, int id)
        {
            PizzaModel pizzaUpdated = await _pizzaRepository.update(pizza, id);
            return Ok(pizzaUpdated);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> delete(int id)
        {
            bool pizzaWasDeleted = await _pizzaRepository.delete(id);
            return Ok(pizzaWasDeleted);
        }
    }
}
