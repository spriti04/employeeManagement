package EmployeeManagementSystem.Controller;

import EmployeeManagementSystem.DTO.LoginDto;
import EmployeeManagementSystem.Model.Employee;
import EmployeeManagementSystem.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/emp")
public class EmployeeController {

    @Autowired
    private EmployeeService empServ;

    @PostMapping("/save")
    public ResponseEntity<String> saveNewEmployee(@RequestBody Employee employee){
        String result = empServ.saveEmployee(employee);

        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateEmployeeHandler(@RequestBody Employee updatedEmp){
        String result = empServ.updateEmployee(updatedEmp);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/login")
    public ResponseEntity<Employee> getEmployeeDtls(@RequestBody LoginDto dto){
        Employee employee = empServ.getEmployee(dto.getEmail(), dto.getPasswrod());

        return ResponseEntity.ok(employee);
    }
}
