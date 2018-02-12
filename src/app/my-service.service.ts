import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MyServiceService {

  

  constructor(private http: Http) { 

    
    //var Mongodb = require('mongodb');

/*     Mongodb.connect("mongodb://vinodsharma412:vinodsharma@412@ds127536.mlab.com:27536/myappdb", function(err, client) {      
      console.log("mongodb Connected successfully to server");        
      client.close();
     }); */


  }

  listdata = null;
  url ="";



   fetchDatafromAPI(parma)  {
      
    //this.url ="../assets/quesdata.json";
    this.url ="https://api.mlab.com/api/1/databases/myappdb/collections/tblQuestionAnswer?q={'qes':'"+ parma +"'}&apiKey=gNkCK7X8ffmDmOaP4Lb8GD4gH95EDUva";

    return  this.http.get(this.url)
      .map(res => res.json())

  }



  listOfResults = null;

  fetchDatafromMongo(parma) {

    this.url ="http://172.16.200.142:3000/api/ques?qes="+ parma ;

    return  this.http.get(this.url)
      .map(res => res.json()
    )

  }

  obj = {
    id: '1',
    name: "sharma"
  };

  success() {
    return "Successfuly";
  }


}



