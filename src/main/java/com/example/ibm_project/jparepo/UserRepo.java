package com.example.ibm_project.jparepo;

import com.example.ibm_project.model.Class;
import com.example.ibm_project.model.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<Enrollment, Long> {
    void deleteClassById(Long id);
}
