import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoShowComponent } from './components/todo-show/todo-show.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { LoginComponent } from './components/login/login.component';
import { InterceptorAuthService } from './services/interceptor-auth.service';
import { InPlaceEditorModule } from '@syncfusion/ej2-angular-inplace-editor';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavbarComponent,
    TodoShowComponent,
    TodoAddComponent,
    TodoEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    InPlaceEditorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorAuthService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
