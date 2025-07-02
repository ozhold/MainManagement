import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginDto } from '../../core/dataContracts/loginDto';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterDto } from '../../core/dataContracts/registerDto';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, 
    RouterModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordRepeated: ['', [Validators.required, Validators.minLength(6)]],
      }, { validator: (myRegisterForm: FormGroup) => {
        const password = myRegisterForm.get('password')?.value;
        const passwordRepeated = myRegisterForm.get('passwordRepeated')?.value;
        return password === passwordRepeated ? null : { passwordsMismatch: true };
      }
    });
  }

  register() {
    if (this.registerForm.valid) {
      const registerDto: RegisterDto = this.registerForm.value;

      this.authService.register(registerDto).subscribe({
        next: (result: any) => {
          localStorage.setItem('token', result.token);
          this.router.navigate(['/platform/products']);
        },
        error: (err: string) => {
          console.log('Register failed:', err);
        }
      });
    }
  }

}
