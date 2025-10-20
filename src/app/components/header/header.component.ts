import { Component, inject } from '@angular/core';
import { FoodtruckService } from '../../foodtruck.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'mi-proyecto-angular';
  foodtruckservice = inject(FoodtruckService);
  usuarios : any[] = [];
  index: any;
  constructor() {
  this.foodtruckservice.obtenerUsuarios().subscribe(datos => {
  this.usuarios = datos;
  });
    
  }

}
