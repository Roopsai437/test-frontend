import { Component, OnInit } from '@angular/core';
import { Test } from '../model/test';
import { TestServiceService } from '../test-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testsincenter',
  templateUrl: './testsincenter.component.html',
  styleUrls: ['./testsincenter.component.css']
})

export class TestsincenterComponent implements OnInit {
  
  test:Test[];



  constructor(private testService:TestServiceService) {
    


   }


   findTestsById(id:number){
    let observable:Observable<Test[]>=this.testService.findByCenterId(id);
    observable.subscribe(
      testArr=>{
        this.test=testArr;
      }
    )
   }

   findCenterId(form:any){
    let data=form.value;
    let id=data.centerId;
   this.findTestsById(id);
  }



  ngOnInit(): void {
   }

}
