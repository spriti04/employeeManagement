package EmployeeManagementSystem.Service;

import EmployeeManagementSystem.Model.Employee;
import org.springframework.stereotype.Service;

@Service
public interface EmployeeService {

    public String saveEmployee(Employee employee);

    public String updateEmployee(Employee updatedEmp);

    public Employee getEmployee(String username, String password);
}
