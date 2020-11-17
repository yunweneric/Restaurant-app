import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-resto-update',
  templateUrl: './resto-update.component.html',
  styleUrls: ['./resto-update.component.css', '../shared/sharedcss.css']
})
export class RestoUpdateComponent implements OnInit {
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  alert: boolean = false;

  constructor(private router: ActivatedRoute, private resto: RestoService) {}
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe(result =>{
      console.log(result);
      this.editResto = new FormGroup({
        name: new FormControl(result["name"]),
        email: new FormControl(result["email"]),
        address: new FormControl(result["address"]),
      });
      
    })
    
  }
  collectResto(){
    // console.log(this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params.id, this.editResto.value).subscribe(result =>{
      // console.log(result);
      this.alert = true;

    })
  }

 
  // collectResto() {
  //   this.resto.saveResto(this.editResto.value).subscribe((data) => {
  //   });
  //   this.alert = true;
  //   this.editResto.reset({})

  // };
}
