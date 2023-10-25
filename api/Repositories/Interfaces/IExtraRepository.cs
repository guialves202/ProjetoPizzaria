using api.Models;

namespace api.Repositories.Interfaces
{
    public interface IExtraRepository
    {
        Task<List<ExtraModel>> index();
        Task<ExtraModel> show(int id);
        Task<ExtraModel> store(ExtraModel extra);
        Task<ExtraModel> update(ExtraModel extra, int id);
        Task<bool> delete(int id);
    }
}
