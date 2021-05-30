package com.example.ibm_project.service;

import com.example.ibm_project.jparepo.UserRepo;
import com.example.ibm_project.model.Class;
import com.example.ibm_project.model.Enrollment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {
    private final UserRepo studentRepo;

    @Autowired
    public UserService(UserRepo studentRepo) {
        this.studentRepo = studentRepo;
    }

    @Transactional
    public Enrollment enrollClass(Enrollment enrolledClass){
        return studentRepo.save(enrolledClass);
    }

    public List<Enrollment> findAllClasses(){
        return studentRepo.findAll();
    }

    @Transactional
    public void deleteClass(Long id){
        studentRepo.deleteClassById(id);
    }

}
