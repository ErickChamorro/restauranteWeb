import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import swal from 'sweetalert2';
import { ApiService } from 'src/app/servicios/apis/api.service';


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
    public router: Router) {

      this.loginForm = new FormGroup({
        emailid: new FormControl('',Validators.required),
        passwd: new FormControl('',Validators.required)
     });
    }

  ngOnInit() {
  }

  inicar(){
    let data = {
      username:this.loginForm.get("emailid").value,
      password:this.loginForm.get("passwd").value
    }
    console.log(data);
    this.api.login(data).subscribe(apiData=>{
      console.log(apiData)
      this.router.navigate(['/dashboard']);
      localStorage.setItem("token",apiData.access_token)
    })
  }
  submit_handler() {
    
    /**/
  }

}
