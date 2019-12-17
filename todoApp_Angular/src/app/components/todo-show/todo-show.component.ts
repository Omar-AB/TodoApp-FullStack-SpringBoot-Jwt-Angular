import { Todo } from './../../models/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-show',
  templateUrl: './todo-show.component.html',
  styleUrls: ['./todo-show.component.css']
})
export class TodoShowComponent implements OnInit {

  todo: Todo;
  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit() {

    let id = this.route.snapshot.params.idTodo;
    
    this.todoService.getOne(id)
                    .subscribe((res: Todo) => this.todo = res)
  }

}
