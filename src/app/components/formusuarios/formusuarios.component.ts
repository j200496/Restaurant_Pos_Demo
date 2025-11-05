import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formusuarios',
  imports: [FormsModule,CommonModule],
  templateUrl: './formusuarios.component.html',
  styleUrl: './formusuarios.component.css'
})
export class FormusuariosComponent {
@Input() isUpdate:boolean = false;
@Input() titulo!:string;
@Input() btnnombre!: string;
@Input() btnclass!: string;
//@Input() btncolor!:string
}
