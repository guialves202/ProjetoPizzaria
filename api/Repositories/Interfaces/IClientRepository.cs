using api.Models;

namespace api.Repositories.Interfaces
{
    public interface IClientRepository
    {
        Task<List<ClientModel>> index();
        Task<ClientModel> show(int id);
        Task<ClientModel> store(ClientModel client);
        Task<ClientModel> update(ClientModel client, int id);
        Task<bool> delete(int id);
    }
}
