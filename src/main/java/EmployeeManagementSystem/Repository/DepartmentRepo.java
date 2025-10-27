package EmployeeManagementSystem.Repository;

import EmployeeManagementSystem.Model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DepartmentRepo extends JpaRepository<Department, Integer> {

    Department findByDname(String dname);
}
