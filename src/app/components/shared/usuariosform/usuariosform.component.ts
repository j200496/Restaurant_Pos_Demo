import { CommonModule, NgClass } from '@angular/common';
import { Component,EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FoodtruckService } from '../../../foodtruck.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-usuariosform',
  imports: [ReactiveFormsModule,CommonModule,RouterLink,FormsModule],
  templateUrl: './usuariosform.component.html',
  styleUrl: './usuariosform.component.css'
})
export class UsuariosformComponent implements OnInit {
@Input() isUpdate: boolean = false;
id!: number;
  service = inject(FoodtruckService);
    route = inject(Router);
@Output() method = new EventEmitter<any>();
  formbuilder = inject(FormBuilder)
  form = this.formbuilder.group({
    idUsuario: [0],
    nombre: [""],
    usuario: [""],
    clave: [""],
    rol: ["Administrador"],
    estado:[""],
  })
 usuariosform = new FormGroup({
  idUsuario: new FormControl(0),
    nombre: new FormControl(""),
    usuario: new FormControl(""),
    clave: new FormControl(""),
    rol: new FormControl(""),
    estado:new FormControl(""),
})
@Input() titulo!: string;
@Input() btncolor!:string;
@Input() btnnombre!: string;
@Input() modelo?: any;
ngOnInit(): void {
if(this.modelo !== undefined){
    this.form.patchValue(this.modelo);
  }
}
ResetForm(){
  this.form.reset({rol:'ADMINISTRADOR'});
}
Actualizar(user: any){
  this.method.emit(user);
}

 GuardarCambios(){
    const data = this.form.value;
    this.service.guardarusuarios(data).subscribe({
    next:(res =>{
    alert("Persona agregada");
    this.route.navigateByUrl("/layout/lusuarios");
    })
    })
  }
}
