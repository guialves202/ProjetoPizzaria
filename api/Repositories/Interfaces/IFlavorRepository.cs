using api.Models;

namespace api.Repositories.Interfaces
{
    public interface IFlavorRepository
    {
        Task<List<FlavorModel>> index();
        Task<FlavorModel> show(int id);
        Task<FlavorModel> store(FlavorModel flavor);
        Task<FlavorModel> update(FlavorModel flavor, int id);
        Task<bool> delete(int id);
    }
}
