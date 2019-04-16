import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premed',
  templateUrl: './premed.component.html',
  styleUrls: ['./premed.component.css']
})
export class PremedComponent implements OnInit {
  private selectedLink: string="walkin";        
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    } 
    constructor(private router: Router){
    }
  
    public onPremedClick(){
        this.router.navigate(['./premeddetails']);
    }

  ngOnInit() {
  }

}
