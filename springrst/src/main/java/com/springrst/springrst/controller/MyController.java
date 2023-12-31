package com.springrst.springrst.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrst.springrst.entities.Course;
import com.springrst.springrst.services.CourseService;


@RestController
@CrossOrigin
public class MyController {
	@Autowired
	private CourseService courseSerivice;
	
	//get the courses
	@GetMapping("/courses")
	public List<Course> getCourses(){
		return this.courseSerivice.getCourses();
	}
	//single course get
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		return this.courseSerivice.getCourse(Long.parseLong(courseId));
	}
	//course add
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		return this.courseSerivice.addCourse(course);
	}
	
	//update course using put request
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseSerivice.updateCourse(course);
	}
	//delete the course
	
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus>deleteCourse(@PathVariable String courseId){
		try {
			this.courseSerivice.deleteCourse(Long.parseLong(courseId));
			return new  ResponseEntity(HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
