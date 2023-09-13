package com.example.demo.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="login")
public class Login {
	@Id
	@Column( name = "emailID")
	private String emailID;
	@Column( name = "password")
	private String password;
	
	
	
	public String getEmailID() {
		return emailID;
	}
	public void setEmailID(String EmailID) {
		this.emailID = EmailID;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
