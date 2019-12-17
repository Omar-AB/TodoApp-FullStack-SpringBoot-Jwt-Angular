import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  constructor(
        private todoService: TodoService,
        private router: Router
      ) { }

  ngOnInit() {
  }

  addTodo(form) {
    
    if(form.invalid) {
      alert("please check your data in the Form !")
      return 
    }

    
    let myTodo = {
      ...form.value,
      active: form.value.active ? 1 : 0,
      date: new Date()
    }

    console.log(myTodo);
    
    
    this.todoService.persist(myTodo).subscribe(() => {
        this.router.navigate(['/todos']);
    })
    
     
  }

}
