import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  loading = false;
  name: string;
  email: string;
  password: string;

  constructor(
    private commonService: CommonService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    
    //Error check here

    this.commonService.registerUser(this.registerForm.value)
        .pipe(first())
        .subscribe(
          data => {

          },
          error => {

          }
        );
  }

}
