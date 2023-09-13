package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Login;
import com.example.demo.repository.LoginRepository;

@Service
public class LoginService {
	@Autowired
	LoginRepository lr;

	public boolean checkRegister(String emailID) {

		System.out.println("name"+emailID);
		List<Login> login=lr.findAll();
		for (Login login2 : login) {
			System.out.println(login2.getEmailID()+""+login2.getPassword());
			if(login2.getEmailID().equals(emailID)) {
				return true;
			}
		}
			return false;
	}

	public void Save(Login lg) {
		System.out.println("Entered save");
		lr.save(lg);
		System.out.println("Exit save");
	}

	public boolean checklogin(Login login) {
		List<Login> log=lr.findAll();
		for (Login login2 : log) {
			System.out.println(login2.getEmailID()+""+login2.getPassword());
			if(login2.getEmailID().equals(login.getEmailID())&&login2.getPassword().equals(login.getPassword())) {
				return true;
			}
		}
			return false;
	}
}
