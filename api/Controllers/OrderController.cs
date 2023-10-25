using api.Models;
using api.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;
        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<OrderModel>>> index()
        {
            List<OrderModel> orders = await _orderRepository.index();
            return Ok(orders);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<OrderModel>> show(int id)
        {
            OrderModel order = await _orderRepository.show(id);
            return Ok(order);
        }

        [HttpPost]
        public async Task<ActionResult<OrderModel>> store([FromBody] OrderModel order)
        {
            OrderModel orderStored = await _orderRepository.store(order);
            return Ok(orderStored);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<OrderModel>> update([FromBody] OrderModel order, int id)
        {
            OrderModel orderUpdated = await _orderRepository.update(order, id);
            return Ok(orderUpdated);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> delete(int id)
        {
            bool orderWasDeleted = await _orderRepository.delete(id);
            return Ok(orderWasDeleted);
        }
    }
}
