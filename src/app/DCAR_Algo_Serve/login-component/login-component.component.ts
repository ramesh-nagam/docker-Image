import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  response: any;
  responseData: any;
  jwtToken: any;
  emailValue = '';
  passValue = '';
  searchValue: string | undefined;
  constructor(private service:AuthService) { }
  login() {
    if (this.emailValue!==''&&this.passValue!=='') {
      this.service
        .proceedLogin(this.loginForm.value)
        .subscribe((response) => {
          console.log(response)
     
        })
      this.loginForm.setValue({ email: '', password: '' });
    }
  
  }

  ngOnInit(): void {
  }

}
