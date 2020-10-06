import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTestComponent } from './add-test/add-test.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TestsListComponent } from './tests-list/tests-list.component';
import { HomeComponent } from './home/home.component';
import { TestServiceService } from './test-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestsincenterComponent } from './testsincenter/testsincenter.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTestComponent,
    TestDetailsComponent,
    TestsListComponent,
    HomeComponent,
    TestsincenterComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [TestServiceService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
