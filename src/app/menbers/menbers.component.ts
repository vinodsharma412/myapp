import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menbers',
  templateUrl: './menbers.component.html',
  styleUrls: ['./menbers.component.css']
})
export class MenbersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  obj = {
    id:'1',
    name : "sharma"
  };
  arr =["1","2","3","4"];

  isTrue= true;

  iDate = new Date(2002,0,16);

 
}
