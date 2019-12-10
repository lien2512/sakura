import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }
  message = true ;

  ngOnInit() {
  }
  sendMessage() {

    this.messageEvent.emit(this.message);
  }

}
