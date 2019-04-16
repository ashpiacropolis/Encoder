import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-premed',
  templateUrl: './non-premed.component.html',
  styleUrls: ['./non-premed.component.css']
})
export class NonPremedComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
