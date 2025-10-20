import { CommonModule, NgClass } from '@angular/common';
import { Component,inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formproduct',
  imports: [CommonModule,NgClass],
  templateUrl: './formproduct.component.html',
  styleUrl: './formproduct.component.css'
})
export class FormproductComponent{
  formbuilder = inject(FormBuilder)
  form = this.formbuilder.group({
    idProducto: new FormControl(0),
    nombre: new FormControl(),
    descripcion: new FormControl(),
    precio: new FormControl(0),
    estado: new FormControl(),
    categoria: new FormControl(),
    itbis: new FormControl(0),
    precioFinal: new FormControl(0)
  })
 @Input() titulo!: string;
 @Input() isupdate: boolean = false;
 @Input() nombre!:string;
 @Input() clase!:string;
 @Input() modelo!: any;


}
