import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasureConvertionComponent } from './components/measure-convertion/measure-convertion.component';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'mass'},
  { path: ':measure-type',  component: MeasureConvertionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }