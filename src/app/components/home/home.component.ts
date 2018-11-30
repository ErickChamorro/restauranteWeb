import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/servicios/apis/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public location: Location,
    public router: Router,
    private spinner: NgxSpinnerService) {

    this.loginForm = new FormGroup({
      emailid: new FormControl('', [Validators.required, Validators.email]),
      passwd: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    'use strict';
    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function () {
      $(this).on('blur', function () {
        if ($(this).val().trim() !== '') {
          $(this).addClass('has-val');
        } else {
          $(this).removeClass('has-val');
        }
      });
    });
    /*==================================================================

    /*==================================================================
    [ Show pass ]*/
    let showPass = 0;
    $('.btn-show-pass').on('click', function () {
      if (showPass === 0) {
        $(this).next('input').attr('type', 'text');
        $(this).find('i').removeClass('zmdi-eye');
        $(this).find('i').addClass('zmdi-eye-off');
        showPass = 1;
      } else {
        $(this).next('input').attr('type', 'password');
        $(this).find('i').addClass('zmdi-eye');
        $(this).find('i').removeClass('zmdi-eye-off');
        showPass = 0;
      }

    });

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  inicar() {
    const data = {
      username: this.loginForm.get('emailid').value,
      password: this.loginForm.get('passwd').value
    };

    console.log(data);
    this.api.login(data).subscribe(apiData => {
      console.log(apiData);
      this.router.navigate(['/dashboard']);
      localStorage.setItem('token', apiData.access_token);
    }, error => { console.log(error); });
  }


  submit_handler() {
    /**/
  }

}
