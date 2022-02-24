import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertionComponent } from './convertion/convertion.component';

const routes: Routes = [
  // {path:'',pathMatch:'full', redirectTo:'poids'},
  // { path: 'poids', data: {view: 'poids'}, component: ConvertionComponent },
  { path: ':view',  component: ConvertionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }