import { Component, inject } from '@angular/core';
import { FoodtruckService } from '../../foodtruck.service';
import { RouterLink } from '@angular/router';
import { TablesComponent } from "../shared/usuariosform/tables/tables.component";
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-listausuarios',
  imports: [TablesComponent],
  templateUrl: './listausuarios.component.html',
  styleUrl: './listausuarios.component.css'
})
export class ListausuariosComponent {
UsuariosService = inject(FoodtruckService)

usuarios: any[] = [];
users: any[] = [
  {nombre:'Prueba1',usuario:'Test',clave:'Test1',rol:'ADMINISTRADOR',estado:'Activo'},
   {nombre:'Prueba2',usuario:'Test2',clave:'Test2',rol:'EMPLEADO',estado:'Activo'}
]
ngOnInit(){
//this.Refresh();
}
Refresh(){
  this.UsuariosService.obtenerUsuarios().subscribe(datos => {
this.usuarios = datos;
})
}
Borrar(id: number){
  Swal.fire({
   title:'Borrar?',
   text: 'Seguro desea borrar?',
   icon: 'question',
   showCancelButton: true,
   showConfirmButton: true,
   cancelButtonColor: 'red',
  }).then((rest) =>{
  if(rest.isConfirmed){
    this.UsuariosService.SetBorrado(id).subscribe(() =>{
      this.UsuariosService.warning('Exito','Datos borrados','green'); 
      this.Refresh();  
    });
  }
  })
}
tableColumns = [
  { field: 'nombre', header: 'Nombre' },
  { field: 'usuario', header: 'Usuario' },
  { field: 'clave', header: 'Clave'},
  { field: 'rol', header: 'Rol'},
  { field: 'estado', header: 'Estado'}
];


}
