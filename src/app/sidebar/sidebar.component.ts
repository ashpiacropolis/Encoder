import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  title:string="FPS";
  show_dropdown=function()
  {
    this.title="Ashpi";
  }


  constructor() { }

  ngOnInit() {
  }

}
