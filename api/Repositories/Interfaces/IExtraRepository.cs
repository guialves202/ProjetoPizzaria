using api.Models;

namespace api.Repositories.Interfaces
{
    public interface IExtraRepository
    {
        Task<List<ExtraModel>> index();
        Task<ExtraModel> show(string id);
        Task<ExtraModel> store(ExtraModel extra);
        Task<ExtraModel> update(ExtraModel extra, string id);
        Task<bool> delete(string id);
    }
}
