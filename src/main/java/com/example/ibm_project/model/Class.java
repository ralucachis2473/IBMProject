package com.example.ibm_project.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Class implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = true)
    private long id;
    @Column (nullable = false, updatable = true)
    private String name;
    @Column (nullable = false, updatable = true)
    private int year;
    @Column (nullable = false, updatable = true)
    private String section;
    @OneToMany
    @Column (nullable = false, updatable = true)
    private List<Users> studentList;
    @OneToOne
    @Column (nullable = false, updatable = true)
    private Classroom classroom;

    public Class() {}

    public Class(long id, String name, int year, String section, List<Users> studentList, Classroom classroom) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.section = section;
        this.studentList = studentList;
        this.classroom = classroom;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public List<Users> getStudentList() {
        return studentList;
    }

    public void setStudentList(List<Users> studentList) {
        this.studentList = studentList;
    }

    public Classroom getClassroom() {
        return classroom;
    }

    public void setClassroom(Classroom classroom) {
        this.classroom = classroom;
    }
}
