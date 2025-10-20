import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AppComponent } from "../../app.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { Header2Component } from "../header2/header2.component";

@Component({
  selector: 'app-layout',
  imports: [ RouterOutlet, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
