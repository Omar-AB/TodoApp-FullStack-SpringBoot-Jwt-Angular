import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: any;
  username = "";
  password = "";
  data: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.SignInWithUsernameAndPassword(this.username, this.password)
        .subscribe(res => {
          this.data = res;
          this.token = this.data.token;
          localStorage.setItem('token', this.token);
          this.authService.UserIsAutenticated()
          this.router.navigate(['/']);
        })
  }

}
