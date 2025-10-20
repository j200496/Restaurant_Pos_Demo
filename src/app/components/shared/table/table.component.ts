import { Component, Input,OnInit,inject,Output,EventEmitter } from '@angular/core';
import { categorias } from '../../../core/categorias';
import { CommonModule } from '@angular/common';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { CategoriasService } from '../../../services/categorias.service';
import { FoodtruckService } from '../../../foodtruck.service';

import { emit } from 'process';
@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
@Input() Categoria:categorias[] = [];
@Input() th: any[] = [
  {id:'',nombre:''}
];
@Input() titulo!:string;
 @Output()  deleteEvent = new EventEmitter<number>();
service = inject(CategoriasService);
alertservice = inject(FoodtruckService);
cat: categorias ={
  idCategoria: 0,
  categoria:''
}
ngOnInit(): void {
  this.GetCat();
}
GetCat(){
  this.service.getcategorias().subscribe( c =>{
    this.cat = c;
  })
}

Borrar(id:number){
  this.deleteEvent.emit(id);
}
BorrarCat(id: number) {
  Swal.fire({
    title: '¿Borrar?',
    text: '¿Seguro que desea borrar esta categoría?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, borrar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33'
  }).then((result) => {
    if (result.isConfirmed) {
      this.service.DeletCat(id).subscribe({
        next: () => {
          this.alertservice.success('Éxito', 'Categoría borrada correctamente', 'green');
          this.GetCat();
        },
        error: (err) => {
          console.error('Error al borrar categoría:', err);
          this.alertservice.error('Error', 'No se pudo borrar la categoría', 'red');
        }
      });
    }
  });
}

}
