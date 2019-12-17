import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todos';
  courses = ['Angular', 'Reactjs', 'spring'];

  addCourse() {
    this.courses = [...this.courses, this.title];
    this.title = "";
  }
}
 