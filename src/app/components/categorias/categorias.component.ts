import { Component,inject, OnInit } from '@angular/core';
import { categorias } from '../../core/categorias';
import { CategoriasService } from '../../services/categorias.service';
import { TableComponent } from "../shared/table/table.component";
import { RouterLink } from '@angular/router';
import { FoodtruckService } from '../../foodtruck.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  imports: [TableComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit{
  catserv = inject(CategoriasService)
  alertserv = inject(FoodtruckService);
categorias: categorias[] = [
  {categoria:''}
]
th:any[] = [
  {id:'IdCategoria',nombre:'Categoria'}
]
cat!:string;
cate: categorias ={
  categoria:''
}
category: categorias[] = [
  {categoria:'Hot Dog'},
  {categoria:'Hambuerguer'},
  {categoria:'Platos'},
   {categoria:'Bebidas'},
]
ngOnInit(): void {
  this.GetCat();
}
GetCat(){
  this.catserv.getcategorias().subscribe( c => {
    this.categorias = c;
  })
}
AddCat() {
  if (!this.cate) {
    this.alertserv.error("Error", "Debe ingresar el nombre de la categoría", "red");
    return;
  }
  this.category.push({...this.cate})
}
Clear(){
  this.cate.categoria = "";
}
deletec(index: number){
  this.category.splice(index,1)
}
DelCat(id: number){
  Swal.fire({
     title:'Borrar?',
     text: 'Seguro desea borrar?',
     icon: 'question',
     showCancelButton: true,
     showConfirmButton: true,
     cancelButtonColor: 'red',
    }).then((rest) =>{
    if(rest.isConfirmed){
      this.catserv.DeletCat(id).subscribe(() =>{
        this.alertserv.success('Exito','Datos borrados','green'); 
        this.GetCat();
      });
    }
    })
}
}
