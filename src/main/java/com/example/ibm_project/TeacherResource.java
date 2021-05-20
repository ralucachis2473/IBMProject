package com.example.ibm_project;

import com.example.ibm_project.service.TeacherService;
import com.example.ibm_project.model.Class;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teacher")
public class TeacherResource {
    private final TeacherService teacherService;

    public TeacherResource(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Class>> getAllClasses(){
        List<Class> classes = teacherService.findAllClasses();
        return new ResponseEntity<>(classes, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Class> addClass(@RequestBody Class addedClass){
        Class newAddedClass = teacherService.addClass(addedClass);
        return new ResponseEntity<>(newAddedClass, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Class> updateClass(@RequestBody Class updatedClass){
        Class newUpdatedClass = teacherService.updateClass(updatedClass);
        return new ResponseEntity<>(newUpdatedClass, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteClass(@PathVariable("id") Long id){
        teacherService.deleteClass(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
