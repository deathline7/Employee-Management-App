package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Login;
@Repository
public interface LoginRepository extends JpaRepository<Login, String> {
//	@Query("SELECT * FROM Login")
//		List<String> getAllLoginID();
	

//@Query("SELECT password FROM Login e WHERE e.emailID = emailID")
//String checkLogin(@Param("emailID") String emailID);
}

