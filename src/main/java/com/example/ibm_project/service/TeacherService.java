package com.example.ibm_project.service;

import com.example.ibm_project.jparepo.TeacherRepo;
import com.example.ibm_project.model.Class;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.*;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class TeacherService {
    private final TeacherRepo teacherRepo;

    @Autowired
    public TeacherService(TeacherRepo teacherRepo){
        this.teacherRepo = teacherRepo;
    }

    public Class addClass(Class addedClass){
        return teacherRepo.save(addedClass);
    }

    public List<Class> findAllClasses(){
        return teacherRepo.findAll();
    }

    public Class updateClass (Class updatedClass){
        return teacherRepo.save(updatedClass);
    }

    @Transactional
    public void deleteClass(Long id){
        teacherRepo.deleteClassById(id);
    }

}
