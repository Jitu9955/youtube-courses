package com.springrst.springrst.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrst.springrst.dao.CourseDao;
import com.springrst.springrst.entities.Course;
@Service
public class CourseSericeImpl implements CourseService {

	@Autowired
	private CourseDao courseDao;
	//List<Course> list;
	public CourseSericeImpl() {
//		list=new ArrayList<>();
//		list.add(new Course(145,"Core Course","this Course Contains basics of java"));
//		list.add(new Course(4343,"Spring boot Course","creating rest api using spring boot"));
		
	}
	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return courseDao.findAll();
	}
	@Override
	public Course getCourse(long courseId) {
//		// TODO Auto-generated method stub
//		Course c=null;
//		for(Course course:list) {
//			if(course.getId()==courseId) {
//				c=course;
//				break;
//				
//			}
//		}
		return courseDao.getOne(courseId);
	}
	@Override
	public Course addCourse(Course course) {
		//list.add(course);
		courseDao.save(course);
		return course;
	}
	@Override
	public Course updateCourse(Course course) {
//		list.forEach(e->{
//			if(e.getId()==course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
		courseDao.save(course);
		return course;
	}
	@Override
	public void deleteCourse(long parseLong) {
	//	list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
		Course entity=courseDao.getOne(parseLong);
		courseDao.delete(entity);
		 
	}
}


