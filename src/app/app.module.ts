import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InfoComponent } from './info/info.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { AllProjectComponent } from './all-project/all-project.component';
import { ProjectComponent } from './project/project.component';
import { DetailComponent } from './detail/detail.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ChangeComponent } from './change/change.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    SidebarComponent,
    InfoComponent,
    ChartComponent,
    TableComponent,
    AllProjectComponent,
    ProjectComponent,
    DetailComponent,
    AddProjectComponent,

    ChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
  ],
  bootstrap: [ AppComponent ],
  providers   : [
    { provide: NZ_I18N, useValue: en_US }
  ]
})
export class AppModule { }
