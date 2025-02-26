import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'EmsApp';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.authStatus$.subscribe(status=>{
      this.isLoggedIn =status;
    })
  }

  logout() {
    this.authService.logout();
    // this.isLoggedIn = false;
  }
}
