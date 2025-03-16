import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SmallCardComponent } from "./components/small-card/small-card.component";
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContentComponent } from "./pages/content/content.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SmallCardComponent, MenuTitleComponent, HomeComponent, ContentComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

 

})
export class AppComponent {
  title = 'angular-blog';
}
