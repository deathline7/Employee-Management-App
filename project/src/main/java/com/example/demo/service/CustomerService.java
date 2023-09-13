package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Customer;
import com.example.demo.repository.CustomerRepository;

@Service
public class CustomerService {


	@Autowired
	CustomerRepository customerRepository;

	public List<Customer> getAllCustomer(){
		System.out.println("cus data in service"+customerRepository.findAll());
		return customerRepository.findAll();
	}
	public void Save(Customer cus){
		customerRepository.save(cus);
	}
	public void Delet(int id){
		customerRepository.deleteById(id);
	}
	public void Update(Customer cus){
		customerRepository.save(cus);
	}
	public boolean checkEmployeeID(int id) {
		// TODO Auto-generated method stub
		
		String name=customerRepository.checkEmployeeID( id);
		if(name==null) {
			return false;
		}
		else
			return true;
	}
}
