using api.Models;

namespace api.Repositories.Interfaces
{
    public interface IFlavorRepository
    {
        Task<List<FlavorModel>> index();
        Task<FlavorModel> show(string id);
        Task<FlavorModel> store(FlavorModel flavor);
        Task<FlavorModel> update(FlavorModel flavor, string id);
        Task<bool> delete(string id);
    }
}
