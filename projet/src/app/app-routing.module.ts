import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdzSearchComponent } from './adz-search/adz-search.component';
import { AdzResultComponent } from './adz-result/adz-result.component';
const routes: Routes = [
  {
    path: "",
    component: AdzSearchComponent,
  },
  {
    path: "result/:bookname",
    component: AdzResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
