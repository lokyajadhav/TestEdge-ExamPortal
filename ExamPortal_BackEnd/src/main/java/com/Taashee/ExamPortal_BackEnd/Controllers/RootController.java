package com.Taashee.ExamPortal_BackEnd.Controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Taashee.ExamPortal_BackEnd.Beans.JWTAuthenticationModel;
import com.Taashee.ExamPortal_BackEnd.Beans.JWTResponseModel;
import com.Taashee.ExamPortal_BackEnd.Beans.Users;
import com.Taashee.ExamPortal_BackEnd.SecurityConfigurations.TokenGeneration;
import com.Taashee.ExamPortal_BackEnd.Services.ExamPortalService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class RootController {
	@Autowired
	private ExamPortalService examPortalService;
	@Autowired
	private TokenGeneration tokenGeneration;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping("/register")
	public int RegisterUser(@RequestBody Users user) throws Exception
	{
		String encPassword=passwordEncoder.encode(user.getPassword());
		user.setPassword(encPassword);
		user.setRole("USER");
		return examPortalService.registerUser(user);
	}
	@PostMapping("/authenticate")
	public ResponseEntity<JWTResponseModel> authenticateUser(@RequestBody JWTAuthenticationModel credentials)
	{
		
		return tokenGeneration.createToken(credentials);
	}
	@PostMapping("/logout")
	public ResponseEntity<String> logout(HttpServletRequest request)
	{
		
		
		return ResponseEntity.ok("Logged out successfully.");	}
	
	

}
