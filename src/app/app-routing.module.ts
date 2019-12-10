import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectComponent } from './project/project.component';
import { AllProjectComponent } from './all-project/all-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ChangeComponent } from './change/change.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'thongtin', component: ProjectComponent},
  {path: 'thongke', component: AllProjectComponent},
  {path: 'themduan', component: AddProjectComponent},
  {path: 'sua', component: ChangeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
