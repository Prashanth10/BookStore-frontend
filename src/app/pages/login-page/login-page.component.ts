import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth: DataService, private fb: FormBuilder, private router: Router) { }

  loginForm = this.fb.group({
    // email: [null, [Validators.required, Validators.email]],
    id: [null],
    password: [null, [Validators.required, Validators.minLength(6)]]
  })

  ngOnInit(): void {
  }

  Login(){
    this.auth.login(this.loginForm.value).subscribe(
      (response:any) =>{
        localStorage.setItem('user', String(this.loginForm.get('id')?.value));
        this.router.navigateByUrl('home')
      },(error) => {
        console.log(error);
      }
    ); 
  }

}
