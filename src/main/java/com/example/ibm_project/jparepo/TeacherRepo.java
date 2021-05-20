package com.example.ibm_project.jparepo;

import com.example.ibm_project.model.Class;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepo extends JpaRepository<Class, Long> {
    void deleteClassById(Long id);
}
