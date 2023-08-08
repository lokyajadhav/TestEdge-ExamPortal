package com.Taashee.ExamPortal_BackEnd.SecurityConfigurations;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.Taashee.ExamPortal_BackEnd.JWTUtils.JwtUtil;

import io.jsonwebtoken.ExpiredJwtException;
@Component
public class jwtRequestFilter extends OncePerRequestFilter{
	
	private JwtUtil jwtUtil;
	
	private DaoUserDetailsService daoUserDetailsService;
	
	@Autowired
	public jwtRequestFilter(JwtUtil jwtUtil, DaoUserDetailsService daoUserDetailsService) {
		super();
		this.jwtUtil = jwtUtil;
		this.daoUserDetailsService = daoUserDetailsService;
	}


	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		final String header=request.getHeader("Authorization");
		String jwtToken=null;
		String username=null;
		if(header!=null && header.startsWith("Bearer "))
		{
			jwtToken=header.substring(7);
			
			try {
				username=jwtUtil.getUsernameFromToken(jwtToken);
			}catch(IllegalArgumentException e)
			{
				System.out.println("unable to get jwt token");
			}catch(ExpiredJwtException e)
			{
				System.out.println("jwwt token is expired");
			}
		}
		else
		{
			System.out.println("jwt token should start with bearer!");
		}
		if(username!=null && SecurityContextHolder.getContext().getAuthentication()== null)
		{
			UserDetails userDetails=daoUserDetailsService.loadUserByUsername(username);
			if(jwtUtil.validateToken(jwtToken,userDetails))
			{
				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
				usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}
		}
		filterChain.doFilter(request, response);
	}

}
