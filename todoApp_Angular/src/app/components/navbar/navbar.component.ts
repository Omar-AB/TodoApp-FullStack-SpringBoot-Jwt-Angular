import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) {
      
  }


  ngOnInit() {
    this.authService.UserIsAutenticated()
  }

  logout() {
    localStorage.removeItem('token');
    this.authService.UserIsAutenticated();
    this.router.navigate(['/login'])
  }

}
