package com.springrst.springrst.services;

import java.util.List;

import com.springrst.springrst.entities.Course;

public interface CourseService {

	public List<Course>getCourses();
	
	public Course getCourse(long courseId);
	
	public Course addCourse(Course course);
	
	public Course updateCourse(Course course);
	
	public void deleteCourse(long parseLong);
	
}
