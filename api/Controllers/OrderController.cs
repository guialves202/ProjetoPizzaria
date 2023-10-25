using api.Models;
using api.Repositories;
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
            try
            {
                List<OrderModel> orders = await _orderRepository.index();
                return Ok(orders);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<OrderModel>> show(int id)
        {
            try
            {
                OrderModel order = await _orderRepository.show(id);
                if (order == null) 
                {
                    return NotFound("Order not found");
                }
                return Ok(order);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
            
        }

        [HttpPost]
        public async Task<ActionResult<OrderModel>> store([FromBody] OrderModel order)
        {
            try
            {
                OrderModel orderStored = await _orderRepository.store(order);
                return Ok(orderStored);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<OrderModel>> update([FromBody] OrderModel order, int id)
        {
            try
            {
                OrderModel orderUpdated = await _orderRepository.update(order, id);
                return Ok(orderUpdated);
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
                bool orderWasDeleted = await _orderRepository.delete(id);
                return Ok(orderWasDeleted);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }
    }
}
