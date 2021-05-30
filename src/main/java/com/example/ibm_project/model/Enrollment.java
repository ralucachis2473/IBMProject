package com.example.ibm_project.model;

import javax.persistence.*;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Enrollment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;

    //@ManyToOne(fetch = FetchType.LAZY, cascade=CascadeType.ALL)
    //@JoinColumn(columnDefinition = "classIdList")
    //@Column(nullable = false)
    private long classId;

}
