package com.example.ibm_project.service;

import com.example.ibm_project.jparepo.AdminPrivilege;
import com.example.ibm_project.model.Classroom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ibm_project.model.Class;

@Service
public class AdminService {
    private final AdminPrivilege adminPrivilege;

    @Autowired
    public AdminService(AdminPrivilege adminPrivilege) {
        this.adminPrivilege = adminPrivilege;
    }

    /*
    public Class editClassClassroom(Class classInstance){
        classInstance.setClassroom();
    }
    */

    /*
    public Class editClassClassroom(Class classInstance){
        classInstance.setClassroom();
    }
    */
}
