package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Register;
@Repository
public interface RegisterRepository extends JpaRepository<Register, String> {
//	@Query("SELECT EmailID FROM Register e WHERE e.EmailID = EmailID")
//	 String checkregister(@Param("EmailID") String EmailID);
//
//	
}
