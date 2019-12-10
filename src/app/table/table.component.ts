import { Component, OnInit, NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
@NgModule({
  imports:
  [NgZorroAntdModule,
  ]
})
export class TableComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {  }
}
