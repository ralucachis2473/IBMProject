package com.example.ibm_project.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

import lombok.*;

@Entity
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
    //@OneToOne (targetEntity = Classroom.class, fetch = FetchType.LAZY)
    //@JoinColumn(name = "id")
    //@Column(nullable = false)
    //private long classroomId;

}