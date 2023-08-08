package com.Taashee.ExamPortal_BackEnd.JWTUtils;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
@Service
public class JwtUtil {
	private static final String  SECRETE_KEY="sfsdfs234723%$#%$^&^56$67Z$E&sdjfsjdfn@#564656#*&*&^%#$65";
	private static final int TOKEN_VALIDITY=3600*5;
	public String getUsernameFromToken(String token)
	{
		return getClaimsFromToken(token, Claims::getSubject);
		
	}

	private <T> T getClaimsFromToken(String token, Function<Claims,T> claimResolver) {
		// TODO Auto-generated method stub
		final Claims claims=getAllClaimsFromToken(token);
		return claimResolver.apply(claims);
	}

	private Claims getAllClaimsFromToken(String token) {
		// TODO Auto-generated method stub
		return Jwts.parser().setSigningKey(SECRETE_KEY).parseClaimsJws(token).getBody();
	}

	public boolean validateToken(String jwtToken, UserDetails userDetails) {
		// TODO Auto-generated method stub
		String username=getUsernameFromToken(jwtToken);
		return (username.equals(userDetails.getUsername()) && !isTokenExpired(jwtToken));
		
	}

	private boolean isTokenExpired(String jwtToken) {
		// TODO Auto-generated method stub
		final Date expiratioDate=getExpirationDateFromToken(jwtToken);
		
		
		return expiratioDate.before(new Date());
	}

	private Date getExpirationDateFromToken(String jwtToken) {
		// TODO Auto-generated method stub
		return getClaimsFromToken(jwtToken, Claims::getExpiration);
	}

	public String generateJWTToken(UserDetails userDetails) {
		Map<String, Object> claims=new HashMap<>();
		
		return Jwts.builder()
					.setClaims(claims)
					.setSubject(userDetails.getUsername())
					.setIssuedAt(new Date(System.currentTimeMillis()))
					.setExpiration(new Date(System.currentTimeMillis() + TOKEN_VALIDITY*1000))
					.signWith(SignatureAlgorithm.HS512,SECRETE_KEY)
					.compact();
	}
	
}
