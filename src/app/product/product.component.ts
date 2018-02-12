import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @ViewChild('input1') inputEl:ElementRef;

  ngOnInit() {
    this.inputEl.nativeElement.focus();
  }

  items = [];

  newitem = "";

  

  pushItem = function () {

    if (this.newitem != "") {
      this.items.push(this.newitem);
      this.newitem = "";
      this.inputEl.nativeElement.focus();
    }
  }

  removeItem = function(index){
    this.items.splice(index, 1 );
    this.inputEl.nativeElement.focus();
  }

}
