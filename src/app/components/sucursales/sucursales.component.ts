import { Component,inject } from '@angular/core';
import { CategoriasComponent } from "../categorias/categorias.component";
import { SucursalesService } from '../../services/sucursales.service';
import { TableComponent } from "../shared/table/table.component";
import { categorias } from '../../core/categorias';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FoodtruckService } from '../../foodtruck.service';

@Component({
  selector: 'app-sucursales',
  imports: [TableComponent,FormsModule,CommonModule],
  templateUrl: './sucursales.component.html',
  styleUrl: './sucursales.component.css'
})
export class SucursalesComponent {
  alert = inject(FoodtruckService)
sucservice = inject(SucursalesService)
sucursales: any[] =[
   {categoria:'Sd este'},
   {categoria:'Sd norte'},
   {categoria:'Sd oeste'},
   {categoria:'Distrito nacional'}
]
th: any[] =[
{nombre:'Sucursal'}
]
suc!:any;
Agregar(s:string){
this.sucursales.push({categoria: s})
}
borrarsucursal(id:number){

  this.sucursales.splice(id,1);
}
}
