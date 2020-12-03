import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../shared/sharedcss.css'],
})
export class RegisterComponent implements OnInit {
  addUser = new FormGroup({
    first_name: new FormControl(''),
    second: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
}
