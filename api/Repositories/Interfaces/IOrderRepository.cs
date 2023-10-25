using api.Models;

namespace api.Repositories.Interfaces
{
    public interface IOrderRepository
    {
        Task<List<OrderModel>> index();
        Task<OrderModel> show(int id);
        Task<OrderModel> store(OrderModel order);
        Task<OrderModel> update(OrderModel order, int id);
        Task<bool> delete(int id);
    }
}
