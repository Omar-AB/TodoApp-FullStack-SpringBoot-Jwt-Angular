import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});
  getWelcome() {
     return this.http.get("http://localhost:9090/todos");
  }

  getOne(id: number) {
    return this.http.get(`http://localhost:9090/todos/${id}`);
  }

  deleteTodo(id:number){
    return this.http.delete(`http://localhost:9090/todos/${id}`);
  }

  persist(todo: Todo) {
    return this.http.post('http://localhost:9090/todos', todo);
  }

  update(todo: Todo){
    return this.http.put(`http://localhost:9090/todos/${todo.id}`, todo,{headers: this.headers});
  }

  updateActive(id: number, active: number) {
    return this.http.patch(`http://localhost:9090/todos/${id}`, {active})
  }
}
