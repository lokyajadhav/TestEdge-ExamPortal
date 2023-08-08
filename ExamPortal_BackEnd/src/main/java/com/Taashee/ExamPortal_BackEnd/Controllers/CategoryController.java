package com.Taashee.ExamPortal_BackEnd.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Taashee.ExamPortal_BackEnd.Beans.Categories;
import com.Taashee.ExamPortal_BackEnd.Services.ExamPortalService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/category")
public class CategoryController {
	
	@Autowired
	private ExamPortalService examPortalService;
	
	@GetMapping("/getAllCategories")
	public List<Categories> getAllCategories()
	{
		return examPortalService.getAllCategories();
	}
	@PostMapping("/addCategory")
	public int addCategory(@RequestBody Categories category) throws Exception
	{
		
		return examPortalService.addCategory(category);
	}
	@PostMapping("/updateCategory")
	public int updateCategory(@RequestBody Categories category)
	{
		return examPortalService.updateCategory(category);
	}
	@DeleteMapping("/deleteCategory/{id}")
	public int deleteCategory(@PathVariable String id)
	{
		return examPortalService.deleteCategory(id);
	}
	@GetMapping("/getCategory/{id}")
	public Categories getCategory(@PathVariable String id)
	{
		return examPortalService.getCategoryById(id);
	}
	
}
