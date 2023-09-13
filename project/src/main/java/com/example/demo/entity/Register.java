package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="register")

public class Register {
	@Id
	@Column( name = "EmailID")
	private String EmailID;
	@Column( name = "password")
	private String Password;
	
	
	
	public String getEmailID() {
		return EmailID;
	}
	public void setEmailID(String EmailID) {
		this.EmailID = EmailID;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		this.Password = password;
	}
	
	
	
}
