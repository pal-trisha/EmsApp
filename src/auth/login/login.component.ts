import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  LoginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private route: Router,
    private fb: FormBuilder
  ) {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    if(this.LoginForm.valid)
    {
      const {email,password} =this.LoginForm.value;
      this.authService.login(email,password).subscribe(()=>{
        alert('Login successful!'),
        this.route.navigate(['employees']);
      },err=>{
        console.log(err);
        alert('Error');
      })
    }
    else{
      alert('Form is invalid');
      console.log(this.LoginForm.errors);
    }
  }
}
