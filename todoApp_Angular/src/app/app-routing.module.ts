import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoShowComponent } from './components/todo-show/todo-show.component';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: '/todos', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: "todos", component: TodosComponent, canActivate: [AuthGuard] },
  { path: "todos/add", component: TodoAddComponent, canActivate: [AuthGuard] },
  { path: "todos/:idTodo", component: TodoShowComponent, canActivate: [AuthGuard] },
  { path: "todos/edit/:id", component: TodoEditComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
