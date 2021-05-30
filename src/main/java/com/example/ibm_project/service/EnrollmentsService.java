package com.example.ibm_project.service;

import com.example.ibm_project.jparepo.EnrollmentsRepo;
import com.example.ibm_project.jparepo.UserRepo;
import com.example.ibm_project.model.Class;
import com.example.ibm_project.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EnrollmentsService {
    private final EnrollmentsRepo enrollmentsRepo;

    @Autowired
    public EnrollmentsService(EnrollmentsRepo enrollmentsRepo) {
        this.enrollmentsRepo = enrollmentsRepo;
    }

    @Transactional
    public Users addUser(Users addedUser){
        return enrollmentsRepo.save(addedUser);
    }

    public Users updateUser (Users updatedUser){
        return enrollmentsRepo.save(updatedUser);
    }


    public List<Users> findAllUsers(){
        return enrollmentsRepo.findAll();
    }

}