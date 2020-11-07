import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css', '../shared/sharedcss.css']
})
export class ForgotpwdComponent implements OnInit {

  constructor(private resto: RestoService) {}
  ngOnInit(): void {}
  alert: boolean = false;

  addresto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  collectResto() {
    this.resto.saveResto(this.addresto.value).subscribe((data) => {
      // console.log('data', data);
    });
    this.alert = true;
    this.addresto.reset({})

  };

}
