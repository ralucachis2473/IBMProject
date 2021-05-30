package com.example.ibm_project.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

@Entity
@Table (name = "Class")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Class implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private int year;
    @Column(nullable = false)
    private String section;
    @Column(nullable = false)
    private String details;

    //@OneToMany (mappedBy = "cls", orphanRemoval = true, fetch = FetchType.LAZY)
    //@JsonIgnore
    //private List<Enrollment> enrolledUsers;


}