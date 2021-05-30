package com.example.ibm_project.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table (name = "Classroom")
public class Classroom implements Serializable {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String location;
    @Column(nullable = false)
    private int capacity;
    @Column(nullable = false)
    private String features;
}