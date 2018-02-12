import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { MyServiceService } from './../my-service.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor(private newServeice  : MyServiceService) {}

  form;

  ngOnInit() {

    console.log(this.newServeice.success()); 
    console.log(this.newServeice.obj); 

    this.form = new FormGroup({
      decimel: new FormControl(""),
      binary: new FormControl(""),
      octa: new FormControl(""),
      hexa: new FormControl("")
    })
  }

  b = 0;
  o = 0;
  h = 0;


  /* decimelChange = function (oldvalule, newValue) {
    if (newValue != "") {
      this.form.patchValue({ binary: parseInt(newValue, 10).toString(2) });
      this.form.patchValue({ octa: parseInt(newValue, 10).toString(8) });
      this.form.patchValue({ hexa: parseInt(newValue, 10).toString(16) });
    }
    else {
      this.form.patchValue({ binary: "" });
      this.form.patchValue({ octa: "" });
      this.form.patchValue({ hexa: "" });
    }
  }

  binaryChange = function (oldvalule, newValue) {
    this.b = this.b + 1;
    if (this.b == 1) {
      if (newValue != "") {
        this.form.patchValue({ decimel: parseInt(newValue, 2).toString(10) });
      }
      else {
        this.form.patchValue({ decimel: "" });
      }
      this.b = 0;
    }   
  }

  octaChange = function (oldvalule, newValue) {
    this.o = this.o + 1;
    if (this.o == 1) {
      if (newValue != "") {
        this.form.patchValue({ decimel: parseInt(newValue, 8).toString(10) });
      }
      else {
        this.form.patchValue({ decimel: "" });
      }
      this.o = 0;
    }
   
  }

  hexaChange = function ( oldvalule, newValue) {
    this.h = this.h + 1;
    if (this.h == 1) {
      if (newValue != "") {
        this.form.patchValue({ decimel: parseInt(newValue, 16).toString(10) });
      }
      else {
        this.form.patchValue({ decimel: "" });
      }
      this.h = 0;
    }    
  } */


}

