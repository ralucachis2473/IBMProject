package com.example.ibm_project.service;

import com.example.ibm_project.jparepo.AdminRepo;
import com.example.ibm_project.model.Classroom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ibm_project.model.Class;

@Service
public class AdminService {
    private final AdminRepo adminRepo;

    @Autowired
    public AdminService(AdminRepo adminRepo) {
        this.adminRepo = adminRepo;
    }

    /*
    public Class editClassClassroom(Class classInstance){
        classInstance.setClassroom();
    }
    */

}
