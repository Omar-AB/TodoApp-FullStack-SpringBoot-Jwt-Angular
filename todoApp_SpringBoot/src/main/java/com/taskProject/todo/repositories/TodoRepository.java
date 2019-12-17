package com.taskProject.todo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taskProject.todo.entities.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}
