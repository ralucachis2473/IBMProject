package com.example.ibm_project.jparepo;

import com.example.ibm_project.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminPrivilege extends JpaRepository<Users, Long> {

}
