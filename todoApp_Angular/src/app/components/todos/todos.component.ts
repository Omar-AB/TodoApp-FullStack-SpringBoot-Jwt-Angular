import { Todo } from './../../models/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';


import Swal from 'sweetalert2';
import { InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


 
  
  todos: Todo[] = [];
  image = "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NoO0UpFmSlqYIujQ6Gta";
  constructor(private todoService: TodoService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.getMessage();

  }

  getMessage() {
    this.todoService.getWelcome().subscribe((res: Todo[]) => {
      this.todos = res;
    })
  }
delete(id){


  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file!',
    type: 'question',
    showCancelButton: true,
    confirmButtonText: 'Ok',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.value) {

      this.todoService.deleteTodo(id).subscribe(()=>{
        //this.todos.splice(index, 1);

        this.todos = this.todos.filter((todo) => todo.id != id);

        this.flashMessage.show('Tod is delete Successfuly', {
          cssClass: 'alert-info',
          timer: 5000
        })
      },
      (err) => {
       
        this.flashMessage.show(err.message, {
          cssClass: 'alert-warning',
          timer: 5000
        })
      })

      // Swal.fire({
      //   title: 'la tache a été supprimé!',
      //   text: 'cette tache est supprimé avec succes',
      //   type: 'success',
      //   timer: 3000
      // })

    }
  })
 
}

  toggleActive(todo) {
    this.todoService.updateActive(todo.id, +(!todo.active))
        .subscribe((res) => {
          console.log(res)
          todo.active = +(!todo.active)
        })
  }


  log(data) {
    console.log(data)
  }

  addstickyNote() {
    const todo = {
      content: 'your notes',
      active:  0,
      date: new Date()
    };
    todo.content = 'Your notes';
    todo.active = 0;
    todo.date = new Date();
    this.todoService.persist(todo).subscribe((res) => {
      console.log(res);
  });
    this.getMessage();
}
}
