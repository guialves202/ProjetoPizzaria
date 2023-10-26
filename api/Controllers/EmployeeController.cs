using api.Exceptions;
using api.Models;
using api.Repositories;
using api.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;
        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<EmployeeModel>>> index()
        {
            try
            {
                List<EmployeeModel> employees = await _employeeRepository.index();
                return Ok(employees);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeModel>> show(int id)
        {
            try
            {
                EmployeeModel employee = await _employeeRepository.show(id);
                if (employee == null)
                {
                    return NotFound("Employee not found");
                }
                return Ok(employee);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPost]
        public async Task<ActionResult<EmployeeModel>> store([FromBody] EmployeeModel employee)
        {
            try
            {
                EmployeeModel employeeStored = await _employeeRepository.store(employee);
                return Ok(employeeStored);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<EmployeeModel>> update([FromBody] EmployeeModel employee, int id)
        {
            try
            {
                EmployeeModel employeeUpdated = await _employeeRepository.update(employee, id);
                return Ok(employeeUpdated);
            }
            catch (HttpException ex)
            {
                return StatusCode(ex.HttpCode, ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> delete(int id)
        {
            try
            {
                bool employeeWasDeleted = await _employeeRepository.delete(id);
                return Ok(employeeWasDeleted);
            }
            catch (HttpException ex)
            {
                return StatusCode(ex.HttpCode, ex.Message);
            }
        }
    }
}
