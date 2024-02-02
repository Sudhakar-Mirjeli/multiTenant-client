import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signUpForm!: FormGroup


  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }



  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userName: [''],
      email: ['', Validators.required],
      password: ['']
    })
  }



  signUpUser() {
    if (this.signUpForm.valid) {
      console.log('===============', this.signUpForm.value)
      this.apiService.createNewUser(this.signUpForm.value).subscribe((res: any) => {
        if (res.status) {
          console.log('RESSSSSSSS', res)
        }
      })
    }
    // this.todoForm.value
    // this.todos.push(this.todoForm.value as { newTodo: string })
    // this.todos.push(this.todoForm.value)
    // console.log("========", this.todoForm.value, this.todos)
  }
}