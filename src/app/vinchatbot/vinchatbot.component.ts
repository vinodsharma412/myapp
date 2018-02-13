import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
import * as $ from 'jquery';
import { MyServiceService } from '../my-service.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-vinchatbot',
  templateUrl: './vinchatbot.component.html',
  styleUrls: ['./vinchatbot.component.css']
})
export class VinchatbotComponent implements OnInit {

  listOfResults = null;


  constructor(public sanitizer: DomSanitizer, private newser: MyServiceService, private http: Http) {
    //console.log( this.newser.fetchData());
    //this.listOfResults =  this.newser.fetchData().unsubscribe();

    // this.newser.fetchData()
    //   .subscribe(
    //   data => {
    //     this.listOfResults = data; console.log(this.listOfResults);
    //   }
    //   );

    // this.http.get('https://api.mlab.com/api/1/databases/myappdb/collections/tblQuestionAnswer?apiKey=?') 
    // .map(res => res.json())
    // .subscribe(
    //   data => {
    //    this.listOfResults = data;          
    //   }
    // );

  }

  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }



  @ViewChild('input1') inputEl: ElementRef;
  @ViewChild('div1') divEl: ElementRef;



  sflag = false;
  newQuestion = "";
  quesans = null;
  noans = null;

  listOfQuestions = [
    {
      qes: "",
      ans: "Hi.... How can i help you?"
    }
  ]


  listOfNotanswered = []

  ngOnInit() {

    this.inputEl.nativeElement.focus();


    $(document).ready(function () {
      $("#btnsubmit").click(function () {
        $(".messages").animate({ scrollTop: $(".messages").prop('scrollHeight') }, 300);
      });
    });

  }


  askQuestion() {


    if (this.newQuestion.toLowerCase() == "") {
      return;
    }


    this.sflag = false;


    this.newser.fetchDatafromAPI(this.newQuestion.toLowerCase())
      .subscribe(
      data => {

        this.listOfResults = data; 


        //this.quesans = this.listOfResults.filter(item => item.qes.toLowerCase() == this.newQuestion.toLowerCase());
        this.quesans = this.listOfResults.filter(item => item.qes.find(x => x.toLowerCase() == this.newQuestion.toLowerCase()));


        if (this.sflag || this.quesans.length > 0) {
          this.quesans.ans = this.sanitizer.bypassSecurityTrustHtml(this.quesans[0].ans);
          this.listOfQuestions.push({ qes: this.newQuestion, ans: this.quesans.ans });
        } else {
          this.listOfQuestions.push({ qes: this.newQuestion, ans: "not found ans..." });

          this.noans = this.listOfNotanswered.filter(item => item.toLowerCase() == this.newQuestion.toLowerCase());
          if (this.noans.length == 0) {
            this.listOfNotanswered.push(this.newQuestion);
          }

        }

        //this.divEl.nativeElement.scrollTop = this.divEl.nativeElement.scrollHeight;
        $(".messages").animate({ scrollTop: $(".messages").prop('scrollHeight') }, 300);


        this.newQuestion = "";
        this.inputEl.nativeElement.focus();

      }
      );



  }

  askQuestionAPI() {


    if (this.newQuestion.toLowerCase() == "") {
      return;
    }


    this.sflag = false;


    this.newser.fetchDatafromAPI(this.newQuestion.toLowerCase())
      .subscribe(
      data => {

        this.listOfResults = data; 


        //this.quesans = this.listOfResults.filter(item => item.qes.toLowerCase() == this.newQuestion.toLowerCase());
        this.quesans = this.listOfResults.filter(item => item.qes.find(x => x.toLowerCase() == this.newQuestion.toLowerCase()));


        if (this.sflag || this.quesans.length > 0) {
          this.quesans.ans = this.sanitizer.bypassSecurityTrustHtml(this.quesans[0].ans);
          this.listOfQuestions.push({ qes: this.newQuestion, ans: this.quesans.ans });
        } else {
          this.listOfQuestions.push({ qes: this.newQuestion, ans: "not found ans..." });

          this.noans = this.listOfNotanswered.filter(item => item.toLowerCase() == this.newQuestion.toLowerCase());
          if (this.noans.length == 0) {
            this.listOfNotanswered.push(this.newQuestion);
          }

        }

        //this.divEl.nativeElement.scrollTop = this.divEl.nativeElement.scrollHeight;
        $(".messages").animate({ scrollTop: $(".messages").prop('scrollHeight') }, 300);


        this.newQuestion = "";
        this.inputEl.nativeElement.focus();

      }
      );



  }

  askQuestion_old() {


    if (this.newQuestion.toLowerCase() == "") {
      return;
    }


    this.sflag = false;


    //this.quesans = this.listOfResults.filter(item => item.qes.toLowerCase() == this.newQuestion.toLowerCase());
    this.quesans = this.listOfResults.filter(item => item.qes.find(x => x.toLowerCase() == this.newQuestion.toLowerCase()));


    if (this.sflag || this.quesans.length > 0) {
      this.quesans.ans = this.sanitizer.bypassSecurityTrustHtml(this.quesans[0].ans);
      this.listOfQuestions.push({ qes: this.newQuestion, ans: this.quesans.ans });
    } else {
      this.listOfQuestions.push({ qes: this.newQuestion, ans: "not found ans..." });

      this.noans = this.listOfNotanswered.filter(item => item.toLowerCase() == this.newQuestion.toLowerCase());
      if (this.noans.length == 0) {
        this.listOfNotanswered.push(this.newQuestion);
      }

    }



    this.divEl.nativeElement.scrollTop = this.divEl.nativeElement.scrollHeight;



    this.newQuestion = "";
    this.inputEl.nativeElement.focus();
  }


  askClear() {

    this.listOfQuestions = [];
    this.newQuestion = "";
    this.inputEl.nativeElement.focus();
  }

}
