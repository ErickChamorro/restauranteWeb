import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { ApiService } from '../../servicios/apis/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public location: Location,
    public router: Router,
    public apiService: ApiService) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  submit_handler() {
    this.apiService.login(this.loginForm.value)
      .subscribe(respuesta => {
        const token = respuesta['access_token'];
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard']);
      }, error => {
        console.log(error);
      });
    // console.log(this.loginForm.value);
    // this.router.navigate(['/dashboard']);
  }

}
