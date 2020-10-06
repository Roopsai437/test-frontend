import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTestComponent } from './add-test/add-test.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TestsListComponent } from './tests-list/tests-list.component';
import {TestsincenterComponent}from './testsincenter/testsincenter.component';
const routes: Routes = [
  {
    path:"app-home",
    component:HomeComponent
  },

{
  path:'',
  redirectTo :'app-home',
  pathMatch:'full'
},

  {
    path:'test-details/:id',
    component:TestDetailsComponent
  },
  {
    path:'test-details',
    component:TestDetailsComponent
  },
  {
    path: 'add-test',
    component:AddTestComponent
  },

  

  {
    path:'test-list',
    component: TestsListComponent
  },

  
  {
    path:'testsincenter',
    component: TestsincenterComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
