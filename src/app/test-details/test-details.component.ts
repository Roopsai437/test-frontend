import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {Test} from '../model/test'
import { TestServiceService} from '../test-service.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private testService:TestServiceService) {

    let observable =route.paramMap;
    observable.subscribe((params:ParamMap)=>{
     let idVal:string =params.get("id");
     let idNum:number=Number(idVal);
     console.log("id available is "+idNum);
     this.findTestById(idNum);
    })
    }
 
    test:Test;
 
 
    findTestById(id:number){
     let observable:Observable<Test>=this.testService.gettest(id);
     observable.subscribe(
       testArg=>{
         this.test=testArg;
       },
 
       err=>{
         console.log("isnide test details, err is "+err.message);
       }
 
     );
    }
 
   findTest(form:any){
     let data=form.value;
     let id=data.testid;
    this.findTestById(id);
   }
 
   ngOnInit(): void {
   }
   
   }