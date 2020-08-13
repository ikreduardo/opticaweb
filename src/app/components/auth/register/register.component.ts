import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User;
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService ) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  register(): void {
    //console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      return Object. values(this.registerForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }else {
      //this.setUser();
      this.authService.register(this.user).subscribe((data: any) => {
        console.log('Registro completado');
        this.router.navigate(['/home']);
      }, error => {
        console.log(error);
      });
    }
  }

  createForm(): void{
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      direction: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
    });
  }


}
