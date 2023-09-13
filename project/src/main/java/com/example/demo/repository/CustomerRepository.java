package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{

	@Query("SELECT name FROM Customer e WHERE e.id = :id")
    String checkEmployeeID(@Param("id") int id);

}
