import { Component,Input, inject, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TablesComponent } from "../shared/usuariosform/tables/tables.component";
import { RouterLink } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FoodtruckService } from '../../foodtruck.service';
import { Products } from '../../core/Products';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-productos',
  imports: [CommonModule,CurrencyPipe,RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
productos: any[] =[];
prod: any[] = [
  {nombre:'Hot Dog',descripcion:'Pollo',precio:150,estado:'Activo',categoria:'Hot Dog',itbis:20, precioFinal:170}
]
service = inject(ProductosService);
alertservice = inject(FoodtruckService);
ngOnInit(): void {
  //this.GetProductos()
}
tableColumns = [
  { field: 'nombre', header: 'Nombre' },
  { field: 'descripcion', header: 'Descripcion' },
  { field: 'precio', header: 'Precio'},
  { field: 'estado', header: 'Estado'},
  { field: 'categoria', header: 'Categoria'},
   { field: 'itbis', header: 'ITBIS'},
    { field: 'precioFinal', header: 'Precio Final'},
];

BorrarProd(id:number){
 Swal.fire({
   title:'Borrar?',
   text: 'Seguro desea borrar?',
   icon: 'question',
   showCancelButton: true,
   showConfirmButton: true,
   cancelButtonColor: 'red',
  }).then((rest) =>{
  if(rest.isConfirmed){
    this.service.BorrarProd(id).subscribe(() =>{
      this.alertservice.success('Exito','Datos borrados','green'); 
      this.GetProductos();
    });
  }
  })
}
GetProductos(){
  this.service.GetProduct().subscribe(producto =>{
    this.productos = producto;
  })
}

}
