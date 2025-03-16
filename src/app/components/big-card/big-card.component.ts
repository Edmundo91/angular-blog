import { Component, Input, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  
  @Input()
  photoCover:string =""
  
  @Input()
  cardTitle:string="" 
  
  @Input()
  cardDescrption:string=""

 @Input() 
 id:string="0"



  construtor(){ 
  }



  ngOnInit(): void {
    
  }

}
