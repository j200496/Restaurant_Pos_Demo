import { Component } from '@angular/core';
import { ReportesComponent } from "../../shared/reportes/reportes.component";
import { CommonModule } from '@angular/common';
import { compras } from '../../core/compras';
import { TablecomprasComponent } from "../../shared/tablecompras/tablecompras.component";

@Component({
  selector: 'app-repcompras',
  imports: [ TablecomprasComponent],
  templateUrl: './repcompras.component.html',
  styleUrl: './repcompras.component.css'
})
export class RepcomprasComponent {

  headers:string[] = ['Nombre','Descripcion','Monto total','Fecha','Tipo','Estado']
compra:compras[] = [
  {nombre:'Carnes',descripcion:'Mercado',montototal:2000,fecha:'10/27/2025',tipo:'Compra',estado:true},
  {nombre:'Carnes',descripcion:'Mercado',montototal:2000,fecha:'10/27/2025',tipo:'Compra',estado:true},
  {nombre:'Carnes',descripcion:'Mercado',montototal:2000,fecha:'10/27/2025',tipo:'Compra',estado:true},
  {nombre:'Carnes',descripcion:'Mercado',montototal:2000,fecha:'10/27/2025',tipo:'Compra',estado:true},
]

}
