using api.Data;
using api.Models;
using api.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly PizzariaDbContext _dbContext;
        public OrderRepository(PizzariaDbContext pizzariaDbContext)
        {
            _dbContext = pizzariaDbContext;
        }

        public async Task<List<OrderModel>> index()
        {
            return await _dbContext.Orders.Include(p => p.Client).Include(p => p.Pizzas).ToListAsync();
        }

        public async Task<OrderModel> show(int id)
        {
            return await _dbContext.Orders.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<OrderModel> store(OrderModel order)
        {
            await _dbContext.Orders.AddAsync(order);
            await _dbContext.SaveChangesAsync();

            return order;
        }
         
        public async Task<OrderModel> update(OrderModel order, int id)
        {
            OrderModel orderFound = await _dbContext.Orders.FirstOrDefaultAsync(x => x.Id == id);

            if (orderFound == null)
            {
                throw new Exception("Order not found");
            }

            orderFound.Price = order.Price;
            orderFound.PaymentMethod = order.PaymentMethod;

            _dbContext.Orders.Update(orderFound);
            await _dbContext.SaveChangesAsync();

            return orderFound;
        }

        public async Task<bool> delete(int id)
        {
            OrderModel orderFound = await show(id);

            if (orderFound == null)
            {
                throw new Exception("Order not found");
            }

            _dbContext.Orders.Remove(orderFound);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
