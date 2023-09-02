package com.springrst.springrst.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.springrst.springrst.entities.Course;
@EnableJpaRepositories
public interface CourseDao extends JpaRepository<Course,Long> {

}
