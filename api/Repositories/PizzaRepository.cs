using api.Data;
using api.Models;
using api.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class PizzaRepository : IPizzaRepository
    {
        private readonly PizzariaDbContext _dbContext;
        public PizzaRepository(PizzariaDbContext pizzariaDbContext)
        {
            _dbContext = pizzariaDbContext;
        }

        public async Task<List<PizzaModel>> index()
        {
            return await _dbContext.Pizzas.ToListAsync();
        }

        public async Task<PizzaModel> show(int id)
        {
            return await _dbContext.Pizzas.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<PizzaModel> store(PizzaModel pizza)
        {
            await _dbContext.Pizzas.AddAsync(pizza);
            await _dbContext.SaveChangesAsync();

            return pizza;
        }
         
        public async Task<PizzaModel> update(PizzaModel pizza, int id)
        {
            PizzaModel pizzaFound = await _dbContext.Pizzas.FirstOrDefaultAsync(x => x.Id == id);

            if (pizzaFound == null)
            {
                throw new Exception("Pizza not found");
            }

            pizzaFound.Price = pizza.Price;
            pizzaFound.Notes = pizza.Notes;
            pizzaFound.Extras = pizza.Extras;
            pizzaFound.Flavors = pizza.Flavors;
            pizzaFound.OrderId = pizza.OrderId;

            _dbContext.Pizzas.Update(pizzaFound);
            await _dbContext.SaveChangesAsync();

            return pizzaFound;
        }

        public async Task<bool> delete(int id)
        {
            PizzaModel pizzaFound = await show(id);

            if (pizzaFound == null)
            {
                throw new Exception("Pizza not found");
            }

            _dbContext.Pizzas.Remove(pizzaFound);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
