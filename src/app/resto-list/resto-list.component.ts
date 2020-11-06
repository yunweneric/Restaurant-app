import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-resto-list',
  templateUrl: './resto-list.component.html',
  styleUrls: ['./resto-list.component.css'],
})
export class RestoListComponent implements OnInit {
  constructor(private resto: RestoService) {}
  collection: any = [];
  ngOnInit(): void {
    this.resto.getdata().subscribe((resto) => {
      // console.log(resto);
      this.collection = resto;
      // console.log((this.collection));
    });
  }
  deleteResto(item) {
    this.collection.splice(item-1, 1)
    this.resto.DeleteResto(item).subscribe((resto) => {
      console.log("result", resto)
    });
  }
}
