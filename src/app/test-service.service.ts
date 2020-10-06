import { Injectable } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import { Test } from '../app/model/test';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  baseUrl="http://localhost:8585/tests";

  constructor(private http:HttpClient) { }


  addTest(test:Test):Observable<Test>{
    let url=this.baseUrl+"/add";   
    let observable:Observable<Test>=this.http.post<Test>(url,test);
    return observable;
   }

   gettest(id:number):Observable<Test>{
       let url=this.baseUrl+"/get/"+id;
       let observable:Observable<Test>=this.http.get<Test>(url);
       return observable;
   }

  getAlltests():Observable<Test[]>{
      let url=this.baseUrl+"/findall";
      let observable:Observable<Test[]>=this.http.get<Test[]>(url);
      return observable;
  }

  removetest(id:number):Observable<void>{
      let url=this.baseUrl+"/delete/"+id;
      let observable:Observable<void>=this.http.delete<void>(url);
      return observable;
  }
  
  findByCenterId(centerId:number):Observable<Test[]>{
    let url=this.baseUrl+"/by/centerid/"+centerId;
    let observable:Observable<Test[]>=this.http.get<Test[]>(url);
      return observable;
  }

}

