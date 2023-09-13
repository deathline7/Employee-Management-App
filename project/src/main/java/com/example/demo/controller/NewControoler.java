package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.Customer;
import com.example.demo.service.CustomerService;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class NewControoler {

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Autowired
	CustomerService customerService;

	@PostMapping("/add.htm")
 public ResponseEntity<Customer> insert(@RequestParam int id,String name,int age,String phno) {
		long ph=Long.parseLong(phno);
		Customer cus=new Customer();
		cus.setId(id);
		cus.setName(name);
		cus.setAge(age);
		cus.setPhno(ph);
		
		boolean isexist= customerService.checkEmployeeID(id);
		if(isexist) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
		}
		else
			customerService.Save(cus);
 return ResponseEntity.ok(cus);
	}
	@PutMapping("/delete.htm")
	public ResponseEntity<Integer> delet(@RequestParam int id) {
		System.out.println("delete successfully");
		customerService.Delet(id);
		return ResponseEntity.ok(1);
	}

	@PutMapping("/update.htm")
	public ResponseEntity<Customer> update(@RequestParam int id,String name,int age,String phno) {
		System.out.println("hello www");
		Customer cus=new Customer();
		cus.setId(id);
		cus.setName(name);
		cus.setAge(age);
		cus.setPhno(Integer.parseInt(phno));
		customerService.Update(cus);
		jdbcTemplate.update("update customer set name=?,age=?,phno=?  where id=?",name,age,phno,id);
		
		return ResponseEntity.ok(cus);
	}


	 @PostMapping("/added.htm")
	    public ResponseEntity<List<Customer>> fetchData() {
	            System.out.println("Enterded add 12345");
	            List<Customer> cus= customerService.getAllCustomer ();
	            cus.forEach(System.out::println);
	            return ResponseEntity.ok(cus);
	    }
//	 @GetMapping("/add")
//	    public String Data() {
//	            System.out.println("Enterded add 12345");
//	            List<Customer> cus= customerService.getAllCustomer();
//	            cus.forEach(System.out::println);
//	            return null;
//	    }
}
