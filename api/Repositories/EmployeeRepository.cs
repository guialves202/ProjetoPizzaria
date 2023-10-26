using api.Data;
using api.Models;
using api.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly PizzariaDbContext _dbContext;
        public EmployeeRepository(PizzariaDbContext pizzariaDbContext)
        {
            _dbContext = pizzariaDbContext;
        }

        public async Task<List<EmployeeModel>> index()
        {
            return await _dbContext.Employees.ToListAsync();
        }

        public async Task<EmployeeModel> show(int id)
        {
            return await _dbContext.Employees.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<EmployeeModel> store(EmployeeModel employee)
        {
            await _dbContext.Employees.AddAsync(employee);
            await _dbContext.SaveChangesAsync();

            return employee;
        }
         
        public async Task<EmployeeModel> update(EmployeeModel employee, int id)
        {
            EmployeeModel employeeFound = await _dbContext.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if (employeeFound == null)
            {
                throw new Exception("Employee not found");
            }

            employeeFound.Name = employee.Name;
            employeeFound.Password = employee.Password;
            employeeFound.CPF = employee.CPF;
            employeeFound.Email = employee.Email;
            employeeFound.RegistrationNumber = employee.RegistrationNumber;
            employeeFound.Phone = employee.Phone;

            _dbContext.Employees.Update(employeeFound);
            await _dbContext.SaveChangesAsync();

            return employeeFound;
        }

        public async Task<bool> delete(int id)
        {
            EmployeeModel employeeFound = await show(id);

            if (employeeFound == null)
            {
                throw new Exception("Employee not found");
            }

            _dbContext.Employees.Remove(employeeFound);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
