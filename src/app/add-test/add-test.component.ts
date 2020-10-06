import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../model/test';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent  {

  constructor(private testService: TestServiceService) {

   }
  test: Test;
 

    
  addTest(form: any) {
    let data = form.value;
     let name = data.name;
     let centerid=data.centerid;
    this.test = new Test(-1, name,centerid);

    
    let successFun = (testArg: Test) => {
      this.test = testArg;
    };
   
    let errFun = err => {
      console.log("err in addusercomponent " + err.message);
    }

    let observable: Observable<Test> = this.testService.addTest(this.test);
    observable.subscribe(successFun, errFun);
  }

  

}
