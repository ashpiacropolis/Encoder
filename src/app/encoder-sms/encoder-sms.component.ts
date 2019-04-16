import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encoder-sms',
  templateUrl: './encoder-sms.component.html',
  styleUrls: ['./encoder-sms.component.css']
})
export class EncoderSmsComponent implements OnInit {

  constructor(private router: Router){
  }

  public onEncodersmsClick(){
      this.router.navigate(['./editsms']);
  }

  ngOnInit() {
  }

}
