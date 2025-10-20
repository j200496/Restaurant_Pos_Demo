import { Component,inject } from '@angular/core';
import { CategoriasComponent } from "../categorias/categorias.component";
import { SucursalesService } from '../../services/sucursales.service';
import { TableComponent } from "../shared/table/table.component";
import { categorias } from '../../core/categorias';

@Component({
  selector: 'app-sucursales',
  imports: [TableComponent],
  templateUrl: './sucursales.component.html',
  styleUrl: './sucursales.component.css'
})
export class SucursalesComponent {
sucservice = inject(SucursalesService)
sucursales: categorias[] =[
   {idCategoria:1,categoria:'Sd este'},
   {idCategoria:2,categoria:'Sd norte'},
   {idCategoria:3,categoria:'Sd oeste'},
   {idCategoria:4,categoria:'Distrito nacional'}
]
th: any[] =[
{id:'IdSucursal',nombre:'Sucursal'}
]
borrarsucursal(id:number){
  this.sucservice.Deletsuctursal(id).subscribe(() =>{

  })
}
}
