using api.Models;

namespace api.Repositories.Interfaces
{
    public interface IPizzaRepository
    {
        Task<List<PizzaModel>> index();
        Task<PizzaModel> show(int id);
        Task<PizzaModel> store(PizzaModel pizza);
        Task<PizzaModel> update(PizzaModel pizza, int id);
        Task<bool> delete(int id);
    }
}
