import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../model/test';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.css']
})
export class TestsListComponent implements OnInit {


  tests:Test[];

  constructor(private testService:TestServiceService) {

    let observable:Observable<Test[]>=testService.getAlltests();
    observable.subscribe(
      testArr=>{
        this.tests=testArr;
      },
      err=>{
        console.log("inside testListComponent err is "+err.message);
      }

    );    
   }
  

  color:string="white";

 

  removeTest(id:number){
 let observable=this.testService.removetest(id);
 observable.subscribe(
   res=>{
    this.removeLocalElement(id);
   },
   err=>{
     console.log("inside removeuser, err is "+err.message);
   }
 );
  }

  removeLocalElement(id:number):void{
    console.log("before user removed,length="+this.tests.length); 
    for(let i=0 ;i<this.tests.length;i++ ){
       let test=this.tests[i];
        if(test.id===id){
            this.tests.splice(i,1);
        }
     }

 

}
ngOnInit(): void {
}
}