import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form;

  ngOnInit() {

    this.form = new FormGroup({
      txtfirstname : new FormControl("", 
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])
    ),
      txtpassword : new FormControl("", this.textValidator)
    })

  }

  textValidator(control)  {
    if (control.value.length<5)
    {
      return {'txtpassword': true};
    }
  }



  title = 'vinod';
  obj = {
    id: '1',
    name: "sharma"
  };
  arr = ["1", "2", "3", "4"];

  isTrue = true;





  onSubmit = function (user) {
    //this.isTrue = false;
    //console.log(user);
  }

  
}
