package com.example.ibm_project;

import com.example.ibm_project.model.Class;
import com.example.ibm_project.model.Enrollment;
import com.example.ibm_project.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class UserResource {
    private final UserService studentService;

    public UserResource(UserService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Enrollment>> getAllClasses(){
        List<Enrollment> classes = studentService.findAllClasses();
        return new ResponseEntity<>(classes, HttpStatus.OK);
    }

    @PostMapping("/enroll")
    public ResponseEntity<Enrollment> enrollClass(@RequestBody Enrollment addedClass){
        Enrollment newAddedClass = studentService.enrollClass(addedClass);
        return new ResponseEntity<>(newAddedClass, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteClass(@PathVariable("id") Long id){
        studentService.deleteClass(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
