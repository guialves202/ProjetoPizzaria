using api.Models;

namespace api.Repositories.Interfaces
{
    public interface IEmployeeRepository
    {
        Task<List<EmployeeModel>> index();
        Task<EmployeeModel> show(int id);
        Task<EmployeeModel> store(EmployeeModel employee);
        Task<EmployeeModel> update(EmployeeModel employee, int id);
        Task<bool> delete(int id);
    }
}
