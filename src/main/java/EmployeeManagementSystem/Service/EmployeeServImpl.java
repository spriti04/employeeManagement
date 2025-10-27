package EmployeeManagementSystem.Service;

import EmployeeManagementSystem.Model.Address;
import EmployeeManagementSystem.Model.Department;
import EmployeeManagementSystem.Model.Employee;
import EmployeeManagementSystem.Repository.AddressRepo;
import EmployeeManagementSystem.Repository.DepartmentRepo;
import EmployeeManagementSystem.Repository.EmployeeRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServImpl implements EmployeeService{

    @Autowired
    private EmployeeRepo empRepo;

    @Autowired
    private DepartmentRepo deptRepo;

    @Autowired
    private AddressRepo addRepo;

    @Override
    public String saveEmployee(Employee employee) {
        String depart = employee.getDeptName();

        if(depart == null || depart.trim().isEmpty()){
            return "Department name is required!";
        }

        Department dept = deptRepo.findByDname(depart.trim());

        if (dept == null) {
            dept = new Department();
            dept.setDname(depart.trim());
            deptRepo.save(dept);
        }

        employee.setDept(dept);

        empRepo.save(employee);

        return "Employee Registered Successfully!";
    }

    @Override
    public String updateEmployee(Employee updatedEmp) {
        Employee existingEmp = empRepo.findByEmail(updatedEmp.getEmail())
                .orElseThrow(() -> new RuntimeException("Employee not found!"));

        existingEmp.setName(updatedEmp.getName());
        existingEmp.setPhNo(updatedEmp.getPhNo());
        existingEmp.setPassword(updatedEmp.getPassword());
        existingEmp.setDeptName(updatedEmp.getDeptName());

        Department dept = deptRepo.findByDname(updatedEmp.getDeptName());
        if (dept == null) {
            dept = new Department();
            dept.setDname(updatedEmp.getDeptName());
            deptRepo.save(dept);
        }

        existingEmp.setDept(dept);

        // Handle address update
        Address existingAddress = existingEmp.getAddress();
        Address newAddress = updatedEmp.getAddress();

        if (existingAddress == null) {
            existingAddress = new Address();
        }
        existingAddress.setCity(newAddress.getCity());
        existingAddress.setState(newAddress.getState());
        existingAddress.setPincode(newAddress.getPincode());

        existingEmp.setAddress(existingAddress);

        empRepo.save(existingEmp);
        return "Profile updated successfully!";
    }

    @Override
    public Employee getEmployee(String username, String password) {

        Employee emp = empRepo.findByEmail(username)
                .orElseThrow(() -> new RuntimeException("Employee not found or doesn't exists!"));

        return emp;

    }
}
