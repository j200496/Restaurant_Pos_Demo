import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FoodtruckService } from './foodtruck.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { WeatherforecastService } from './weatherforecast.service';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule,RouterOutlet],
  standalone: true,
  templateUrl: "app.component.html",
  styleUrl: './app.component.css',

  
  
})
export class AppComponent {
  title = 'mi-proyecto-angular';

Weatherforecast = inject(FoodtruckService);

usuarios: any[] = [];
constructor() {
this.Weatherforecast.obtenerUsuarios().subscribe(datos => {
this.usuarios = datos;
});
}

}
  

