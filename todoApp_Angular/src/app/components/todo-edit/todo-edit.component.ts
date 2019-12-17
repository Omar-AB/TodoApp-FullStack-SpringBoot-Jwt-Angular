import { Todo } from './../../models/todo';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  myTodo: Todo = {
    id: 0,
    content: '',
    date: new Date(),
    active: 0
  };

  id: number;

  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.todoService.getOne(this.id).subscribe((todo: Todo) => {
      this.myTodo = todo;
    })
  }

  updateTodo(form) {

    let customTodo = {
      id: this.id,
      ...form.value
      ,
      active: form.value.active ? 1 : 0
    }

    this.todoService.update(customTodo)
        .subscribe(() => {
          this.router.navigate(['/todos'])
        })

  }

}
