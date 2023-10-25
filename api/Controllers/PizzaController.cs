using api.Models;
using api.Repositories;
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
            try
            {
                List<PizzaModel> pizzas = await _pizzaRepository.index();
                return Ok(pizzas);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PizzaModel>> show(int id)
        {
            try
            {
                PizzaModel pizza = await _pizzaRepository.show(id);
                if (pizza == null)
                {
                    return NotFound("Pizza not found");
                }
                return Ok(pizza);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPost]
        public async Task<ActionResult<PizzaModel>> store([FromBody] PizzaModel pizza)
        {
            try
            {
                PizzaModel pizzaStored = await _pizzaRepository.store(pizza);
                return Ok(pizzaStored);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<PizzaModel>> update([FromBody] PizzaModel pizza, int id)
        {
            try
            {
                PizzaModel pizzaUpdated = await _pizzaRepository.update(pizza, id);
                return Ok(pizzaUpdated);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> delete(int id)
        {
            try
            {
                bool pizzaWasDeleted = await _pizzaRepository.delete(id);
                return Ok(pizzaWasDeleted);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }
    }
}
