using api.Models;

namespace api.Repositories.Interfaces
{
    public interface IClientRepository
    {
        Task<List<ClientModel>> index();
        Task<ClientModel> show(string id);
        Task<ClientModel> store(ClientModel client);
        Task<ClientModel> update(ClientModel client, string id);
        Task<bool> delete(string id);
    }
}
