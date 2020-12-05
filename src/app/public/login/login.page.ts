import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  public loginForm: FormGroup;
  private submitting: boolean = false;
  
  constructor(
    private authService: AuthenticationService,
    public formBuilder: FormBuilder,
  ) 
  {
    this.loginForm = formBuilder.group({
      repID: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
 
  ngOnInit() {
  }
 
  login() {
      this.submitting = true;
      this.authService.login( this.loginForm.value['repID'], this.loginForm.value['password']);
      this.submitting = false;
  }
 
}