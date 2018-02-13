import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MyServiceService {

  

  constructor(private http: Http) { 

    


  }

  listdata = null;
  url ="";



   fetchDatafromAPI(parma)  {
      
    //this.url ="../assets/quesdata.json";
    this.url ="https://api.mlab.com/api/1/databases/myappdb/collections/tblQuestionAnswer?q={'qes':'"+ parma +"'}&apiKey=?";

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



