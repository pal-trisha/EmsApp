import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private authservice: AuthService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const newUser = { ...this.registerForm.value, token: 'mock-jwt-token' };
      this.authservice.register(newUser).subscribe(
        () => {
          this.route.navigate(['login']);
        },
        (err) => {
          alert('Error');
        }
      );
    } else {
      alert('Form is invalid');
      console.log(this.registerForm.errors);
    }
  }
}
