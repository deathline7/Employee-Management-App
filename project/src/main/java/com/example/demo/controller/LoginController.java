package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

//import com.example.demo.entity.Customer;
import com.example.demo.entity.Login;
import com.example.demo.service.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class LoginController {
	@Autowired
	LoginService loginService;
	@PostMapping("/login.htm")
	 public ResponseEntity<Login> insert(@RequestParam String emailID,String password) {
					Login lg=new Login();
			lg.setEmailID(emailID);
			lg.setPassword(password);
			
			
			boolean isCorrect= loginService.checklogin(lg);
			if(!isCorrect) {
				return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
			}
	 return ResponseEntity.ok(lg);
		}
	
	@PostMapping("/register.htm")
	 public ResponseEntity<Login> registerUser(@RequestParam String emailID,String password) {
			System.out.println("Entered register");
			Login lg=new Login();
			lg.setEmailID(emailID);
			lg.setPassword(password);
			
			boolean isexist= loginService.checkRegister(emailID);
			if(isexist) {
				System.out.println("Entered exists");
				return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
			}
			else {
				System.out.println("Entered not exists");
				loginService.Save(lg);
			}
				
	 return ResponseEntity.ok(lg);
}
}