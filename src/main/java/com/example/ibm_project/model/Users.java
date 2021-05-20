package com.example.ibm_project.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Users implements Serializable {
    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (nullable = false, updatable = false)
    private long id;
    @Column (nullable = false)
    private Role role;
    @Column (nullable = false)
    private String firstName;
    @Column (nullable = false)
    private String lastName;
    //@OneToMany (targetEntity = Class.class, fetch = FetchType.LAZY)
    //@JoinColumn(name = "id")
    //private List<Class> enrolledClasses;
}
