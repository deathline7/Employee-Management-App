package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.Register;
import com.example.demo.service.RegisterService;

@CrossOrigin(origins = "http://localhost:3000")
@Controller

public class RegisterController {
//	@Autowired
//	RegisterService registerService;
//	@PostMapping("/register.htm")
//	 public ResponseEntity<Register> insert(@RequestParam String EmailID,String password) {
//			Register lg=new Register();
//			lg.setEmailID(EmailID);
//			lg.setPassword(password);
//			
//			
//			boolean isexist= registerService.checkregister(EmailID);
//			if(isexist) {
//				return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
//			}
//			else
//				registerService.Save(lg);
//	 return ResponseEntity.ok(lg);
//		}
//	
//	@PostMapping("/register.htm")
//	 public ResponseEntity<Register  > registerUser(@RequestParam String emailID,String password) {
//			System.out.println("Entered register");
//			Register lg=new Register();
//			lg.setEmailID(emailID);
//			lg.setPassword(password);
//			
//			boolean isexist= registerService.checkregister(emailID);
//			if(isexist) {
//				System.out.println("Entered exists");
//				return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
//			}
//			else {
//				System.out.println("Entered not exists");
//				registerService.Save(lg);
//			}
//				
//	 return ResponseEntity.ok(lg);
//}
}
