package com.example.ibm_project.jparepo;

import com.example.ibm_project.model.Users;
import com.example.ibm_project.model.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnrollmentsRepo extends JpaRepository<Users, Long> {
    void deleteClassById(Long id);
}