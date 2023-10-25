using api.Data;
using api.Models;
using api.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class FlavorRepository : IFlavorRepository
    {
        private readonly PizzariaDbContext _dbContext;
        public FlavorRepository(PizzariaDbContext pizzariaDbContext)
        {
            _dbContext = pizzariaDbContext;
        }

        public async Task<List<FlavorModel>> index()
        {
            return await _dbContext.Flavors.ToListAsync();
        }

        public async Task<FlavorModel> show(int id)
        {
            return await _dbContext.Flavors.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<FlavorModel> store(FlavorModel flavor)
        {
            await _dbContext.Flavors.AddAsync(flavor);
            await _dbContext.SaveChangesAsync();

            return flavor;
        }
         
        public async Task<FlavorModel> update(FlavorModel flavor, int id)
        {
            FlavorModel flavorFound = await _dbContext.Flavors.FirstOrDefaultAsync(x => x.Id == id);

            if (flavorFound == null)
            {
                throw new Exception("Flavor not found");
            }

            flavorFound.Flavor = flavor.Flavor;
            flavorFound.Price = flavor.Price;
            flavorFound.Description = flavor.Description;

            _dbContext.Flavors.Update(flavorFound);
            await _dbContext.SaveChangesAsync();

            return flavorFound;
        }

        public async Task<bool> delete(int id)
        {
            FlavorModel flavorFound = await show(id);

            if (flavorFound == null)
            {
                throw new Exception("Flavor not found");
            }

            _dbContext.Flavors.Remove(flavorFound);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
