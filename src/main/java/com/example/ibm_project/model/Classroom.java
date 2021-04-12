package com.example.ibm_project.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Classroom implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = true)
    private long id;
    @Column(nullable = false, updatable = true)
    private String name;
    @Column(nullable = false, updatable = true)
    private String location;
    @Column(nullable = false, updatable = true)
    private int capacity;
    @ElementCollection(targetClass=Features.class)
    @Column(nullable = false, updatable = true)
    private List<Features> featureList;

    public Classroom() {}

    public Classroom(long id, String name, String location, int capacity, List<Features> featureList) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.capacity = capacity;
        this.featureList = featureList;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public List<Features> getFeatures() {
        return featureList;
    }

    public void setFeatures(List<Features> featureList) {
        this.featureList = featureList;
    }
}
