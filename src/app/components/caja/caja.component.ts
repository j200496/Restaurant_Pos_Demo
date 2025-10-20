import { Component } from '@angular/core';
import { TableComponent } from "../shared/table/table.component";
import { TablepipeComponent } from "../shared/tablepipe/tablepipe.component";
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-caja',
  imports: [TablepipeComponent, CommonModule, CurrencyPipe],
  templateUrl: './caja.component.html',
  styleUrl: './caja.component.css'
})
export class CajaComponent {
th:any[]=[
  'Producto','Descripcion','Categoria','Precio'
]
productos:any[] =[
  {Nombre:'Hot Dog',Descripcion:'Pollo',Categoria:'Hot Dog',Precio:160},
  {Nombre:'Hamburguer',Descripcion:'Res',Categoria:'Hamburguer',Precio:360},
  {Nombre:'Tacos',Descripcion:'Pollo',Categoria:'Tacos',Precio:260},
  {Nombre:'Tacos',Descripcion:'Pollo',Categoria:'Tacos',Precio:260},
  {Nombre:'Tacos',Descripcion:'Pollo',Categoria:'Tacos',Precio:260},
]
}
