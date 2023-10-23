using api.Models;

namespace api.Repositories.Interfaces
{
    public interface IOrderRepository
    {
        Task<List<OrderModel>> index();
        Task<OrderModel> show(string id);
        Task<OrderModel> store(OrderModel order);
        Task<OrderModel> update(OrderModel order, string id);
        Task<bool> delete(string id);
    }
}
