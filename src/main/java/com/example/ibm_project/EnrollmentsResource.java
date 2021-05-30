package com.example.ibm_project;

import com.example.ibm_project.model.Class;
import com.example.ibm_project.service.EnrollmentsService;
import com.example.ibm_project.model.Users;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enrollments")
public class EnrollmentsResource {
    private final EnrollmentsService enrollmentsService;

    public EnrollmentsResource(EnrollmentsService enrollmentsService) {
        this.enrollmentsService = enrollmentsService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Users>> getAllUsers(){
        List<Users> users = enrollmentsService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Users> addUser(@RequestBody Users addedUser){
        Users newAddedUser = enrollmentsService.addUser(addedUser);
        return new ResponseEntity<>(newAddedUser, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Users> updateUser(@RequestBody Users updatedClass){
        Users newUpdatedUser = enrollmentsService.updateUser(updatedClass);
        return new ResponseEntity<>(newUpdatedUser, HttpStatus.OK);
    }


}