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
  constructor(private router: Router, private fb: FormBuilder,private authService: AuthService ) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  register(): void {
    if (this.registerForm.invalid){
      return Object. values(this.registerForm.controls).forEach(control => {
        control.markAsTouched();
      })
    }
    else {
      this.setUser();
      this.authService.register(this.user).subscribe((data: any) => {
        console.log('Registro completado');
        this.router.navigate(['/home']);
      }, error => {
        console.log(error);
        })
      }
  }

  createForm(): void{
    this.registerForm = this.fb.group({
      iduser : [],
      username: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      direction: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
    });
  }

  setUser(): void{
    this.user = {
      id: this.registerForm.get('iduser').value,
      username: this.registerForm.get('username').value,
      last_name: this.registerForm.get('last_name').value,
      direction: this.registerForm.get('direction').value,
      tel: this.registerForm.get('tel').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    };
  }

}
