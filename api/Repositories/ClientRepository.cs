using api.Data;
using api.Models;
using api.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class ClientRepository : IClientRepository
    {
        private readonly PizzariaDbContext _dbContext;
        public ClientRepository(PizzariaDbContext pizzariaDbContext)
        {
            _dbContext = pizzariaDbContext;
        }

        public async Task<List<ClientModel>> index()
        {
            return await _dbContext.Clients.ToListAsync();
        }

        public async Task<ClientModel> show(int id)
        {
            return await _dbContext.Clients.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<ClientModel> store(ClientModel client)
        {
            await _dbContext.Clients.AddAsync(client);
            await _dbContext.SaveChangesAsync();

            return client;
        }
         
        public async Task<ClientModel> update(ClientModel client, int id)
        {
            ClientModel clientFound = await _dbContext.Clients.FirstOrDefaultAsync(x => x.Id == id);

            if (clientFound == null)
            {
                throw new Exception("Client not found");
            }

            clientFound.Name = client.Name;
            clientFound.Street = client.Street;
            clientFound.StreetNumber = client.StreetNumber;
            clientFound.Neighborhood = client.Neighborhood;
            clientFound.Complement = client.Complement;
            clientFound.City = client.City;
            clientFound.PhoneNumber = client.PhoneNumber;

            _dbContext.Clients.Update(clientFound);
            await _dbContext.SaveChangesAsync();

            return clientFound;
        }

        public async Task<bool> delete(int id)
        {
            ClientModel clientFound = await show(id);

            if (clientFound == null)
            {
                throw new Exception("Client not found");
            }

            _dbContext.Clients.Remove(clientFound);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
