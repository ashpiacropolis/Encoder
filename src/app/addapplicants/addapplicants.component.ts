import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addapplicants',
  templateUrl: './addapplicants.component.html',
  styleUrls: ['./addapplicants.component.css']
})
export class AddapplicantsComponent implements OnInit {

  constructor(private router: Router){
  }

  public onAddapplicantsClick(){
      this.router.navigate(['./matches']);
  }

  ngOnInit() {
  }

}
