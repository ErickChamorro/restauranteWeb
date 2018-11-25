import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';


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
    public router: Router) {
      this.loginForm = this.formBuilder.group({
        usuario: [''],
        password: ['']
      });
    }

  ngOnInit() {
  }

  submit_handler() {
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }

}
