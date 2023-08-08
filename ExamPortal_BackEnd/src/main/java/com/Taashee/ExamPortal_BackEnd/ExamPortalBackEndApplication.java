package com.Taashee.ExamPortal_BackEnd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExamPortalBackEndApplication {
	@Autowired
	public static void main(String[] args) {
		SpringApplication.run(ExamPortalBackEndApplication.class, args);
	}

}
