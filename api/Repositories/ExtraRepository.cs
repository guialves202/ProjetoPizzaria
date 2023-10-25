using api.Data;
using api.Exceptions;
using api.Models;
using api.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class ExtraRepository : IExtraRepository
    {
        private readonly PizzariaDbContext _dbContext;
        public ExtraRepository(PizzariaDbContext pizzariaDbContext)
        {
            _dbContext = pizzariaDbContext;
        }

        public async Task<List<ExtraModel>> index()
        {
            return await _dbContext.Extras.ToListAsync();
        }

        public async Task<ExtraModel> show(int id)
        {
            return await _dbContext.Extras.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<ExtraModel> store(ExtraModel extra)
        {
            await _dbContext.Extras.AddAsync(extra);
            await _dbContext.SaveChangesAsync();

            return extra;
        }
         
        public async Task<ExtraModel> update(ExtraModel extra, int id)
        {
            ExtraModel extraFound = await _dbContext.Extras.FirstOrDefaultAsync(x => x.Id == id);

            if (extraFound == null)
            {
                throw new HttpException(404, "Extra not found");
            }

            extraFound.Extra = extra.Extra;
            extraFound.Price = extra.Price;
            extraFound.Description = extra.Description;

            _dbContext.Extras.Update(extraFound);
            await _dbContext.SaveChangesAsync();

            return extraFound;
        }

        public async Task<bool> delete(int id)
        {
            ExtraModel extraFound = await show(id);

            if (extraFound == null)
            {
                throw new HttpException(404, "Extra not found");
            }

            _dbContext.Extras.Remove(extraFound);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
