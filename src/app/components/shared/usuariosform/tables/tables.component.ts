import { CommonModule } from '@angular/common';
import { Component,EventEmitter, inject, input, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FoodtruckService } from '../../../../foodtruck.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';



@Component({
  selector: 'app-tables',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent implements OnInit {
@Input() columns: { field:string,
header:string
} [] = [];
@Input() data: any[] = [];
@Input() ruta!: string;
@Input() fields!: {
  title:string,
  btncrear:string,

}
service = inject(FoodtruckService)
@Output() metodo = new EventEmitter<any>();
usuarios: any[] = [];
@Input() iscat: boolean = false;
Refresh(){
this.service.obtenerUsuarios().subscribe({
  next:(data =>{
    this.usuarios = data;
  })
})
}
ngOnInit(): void {
  this.Refresh();
}
Borrar(id: number){
 this.metodo.emit(id);
}

getuser(id: number){
this.service.Getuser(id).subscribe({
  next:(data =>{
    
  })
})
  }
}
