using api.Models;

namespace api.Repositories.Interfaces
{
    public interface IPizzaRepository
    {
        Task<List<PizzaModel>> index();
        Task<PizzaModel> show(string id);
        Task<PizzaModel> store(PizzaModel pizza);
        Task<PizzaModel> update(PizzaModel pizza, string id);
        Task<bool> delete(string id);
    }
}
