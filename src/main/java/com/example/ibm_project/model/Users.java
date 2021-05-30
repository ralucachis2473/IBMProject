package com.example.ibm_project.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Users implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (nullable = false, updatable = false)
    private long id;
    @Column (nullable = false)
    private String role;
    @Column (nullable = false)
    private String firstName;
    @Column (nullable = false)
    private String lastName;

    @OneToMany (targetEntity = Enrollment.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "classId", referencedColumnName = "id")
    //@JsonIgnore

    private List<Enrollment> classIdList;
}