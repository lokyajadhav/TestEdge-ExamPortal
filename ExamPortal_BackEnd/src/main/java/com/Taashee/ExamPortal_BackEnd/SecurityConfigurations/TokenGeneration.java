package com.Taashee.ExamPortal_BackEnd.SecurityConfigurations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.Taashee.ExamPortal_BackEnd.Beans.JWTAuthenticationModel;
import com.Taashee.ExamPortal_BackEnd.Beans.JWTResponseModel;
import com.Taashee.ExamPortal_BackEnd.Beans.Users;
import com.Taashee.ExamPortal_BackEnd.Dao.ExamPortalDao;
import com.Taashee.ExamPortal_BackEnd.JWTUtils.JwtUtil;
@Component
public class TokenGeneration {
	
    private ExamPortalDao managementDao;
	
	private JwtUtil jwtUtil;
	
	private PasswordEncoder passwordEncoder;
	
	
	private AuthenticationManager authenticationManager;
	private final UserDetailsService daoUserDetailsService;
	
	@Autowired
	public TokenGeneration(ExamPortalDao managementDao, JwtUtil jwtUtil, PasswordEncoder passwordEncoder,
			AuthenticationManager authenticationManager, UserDetailsService daoUserDetailsService) {
		super();
		this.daoUserDetailsService = daoUserDetailsService;
		
		this.managementDao = managementDao;
		this.jwtUtil = jwtUtil;
		this.passwordEncoder = passwordEncoder;
		this.authenticationManager = authenticationManager;
	}


	public ResponseEntity<JWTResponseModel> createToken(JWTAuthenticationModel jwtModel)
	{
		String username=jwtModel.getUsername();
		String password =jwtModel.getPassword();
		
		authenticate(username, password);
		 if (!authenticate(username, password)) {
		        JWTResponseModel errorResponse = new JWTResponseModel(null, null, "Invalid credentials! Please check your username and password.");
		        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
		    }
		final UserDetails userDetails=daoUserDetailsService.loadUserByUsername(username);
		String jwtToken=jwtUtil.generateJWTToken(userDetails);
		Users user= (Users) managementDao.getUserByUserName(username);
		JWTResponseModel successResponse = new JWTResponseModel(user, jwtToken, null);
	    return ResponseEntity.ok(successResponse);
		
	}
	private boolean  authenticate(String username, String password)
	{
		try
		{
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			return true;
		}catch(DisabledException e)
		{
			System.out.println("user is disabled");
			return false;
		}catch (BadCredentialsException e) {
			// TODO: handle exception
			System.out.println("Bad Credintials entered!");
			return false;
		}
	}
}
