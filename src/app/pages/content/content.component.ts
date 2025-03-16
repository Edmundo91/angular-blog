import { Component, Input, OnInit } from '@angular/core';
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';



@Component({
  selector: 'app-content',
  imports: [BigCardComponent, MenuTitleComponent, MenuBarComponent, SmallCardComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
 
  
  contentPhotoCover:string=""
  
  
  contentCardTitle:string="" 
  
  
  contentCardDescription:string=""
  
  private id:string | null = "0"

  constructor(
  private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      console.log("ID capturado:", this.id); // 👀 Verifique o que aparece no console
  
      if (this.id) {
        this.setValuesToComponent(this.id);
      } else {
        console.error("ID não encontrado na URL!");
      }
    });
  
  } 

  setValuesToComponent(id:string | null){ 
   const result = dataFake.filter(article => article.id === String(id))[0]
  
   this.contentCardTitle = result.title 
   this.contentCardDescription = result.description 
   this.contentPhotoCover = result.photo


  }
  
  
  }


