import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validationcorrect: boolean = false;
  successMessage:string ="";
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }

  login(){
    for (let i = 0; i < this.service.users.length; i++) {
      this.service.users.values;
      if(this.service.users[i].email == this.loginForm.value.email){
        if(this.service.users[i].password == this.loginForm.value.password){
          this.validationcorrect = true;
          break;
        }else{
          this.successMessage = "Incorrect Password!!"
        }
      }else{
        this.successMessage = "Incorrect Email!!"
      }
      }

      if(this.validationcorrect == true)
      {
        this.router.navigate(['/users']);
      }
    }

    };





  //   this.user.email(email => {
  //     if(this.loginForm.value.email == this.user.email && this.loginForm.value.password == this.user.password )
  //     {
  //       this.successMessage="Successfully Loggined In..."
  //     }
  //   });
  // }


