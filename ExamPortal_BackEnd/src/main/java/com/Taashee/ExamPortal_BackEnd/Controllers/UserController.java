package com.Taashee.ExamPortal_BackEnd.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Taashee.ExamPortal_BackEnd.Beans.Users;
import com.Taashee.ExamPortal_BackEnd.Services.ExamPortalService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	private ExamPortalService examPortalService;
	
	@GetMapping("/getUser/{username}")
	public Users getUser(@PathVariable String username)
	{
		return examPortalService.getUser(username);
	}
	@PostMapping("/updateUser")
	public int updateUser(@RequestBody Users user)
	{
		return examPortalService.updateUser(user);
	}
	
}
