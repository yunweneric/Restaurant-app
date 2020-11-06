import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-resto-add',
  templateUrl: './resto-add.component.html',
  styleUrls: ['./resto-add.component.css']
})
export class RestoAddComponent implements OnInit {

  constructor() { }
  addresto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })
  collectResto(){
    console.log(this.addresto.value);
    
  }
  ngOnInit(): void {
  }

}
