import { CommonModule } from '@angular/common';
import { Component,inject, OnChanges, SimpleChanges } from '@angular/core';
import { TablepipeComponent } from "../shared/tablepipe/tablepipe.component";
import { compras } from '../../core/compras';
import { FormsModule } from '@angular/forms';
import { FoodtruckService } from '../../foodtruck.service';

@Component({
  selector: 'app-frmcompras',
  imports: [CommonModule, TablepipeComponent,FormsModule],
  templateUrl: './frmcompras.component.html',
  styleUrl: './frmcompras.component.css'
})
export class FrmcomprasComponent implements OnChanges{
  alert = inject(FoodtruckService)
compras = ['Nombre','Descripcion','Monto total','Fecha','tipo','Estado'
]
date: Date = new Date()
c: compras[] = [];
comp:compras ={
  nombre:'',
  descripcion:'',
  montototal: 0,
  fecha: this.date.toISOString().split('T')[0], 
  tipo:'Compra',
  estado:true
}
tot:number = 0;
Total(t:number){
this.tot = t;
}
ngOnChanges(): void {
}
Agregar(){
  const {nombre,descripcion,montototal,fecha,tipo} = this.comp;
  if(!nombre || !descripcion || !montototal || !fecha || !tipo){
  this.alert.warning("Error","Todos los campos son requeridos","red");
  return;
  }
this.c.push({...this.comp});
}
Borrar(index: number){
  this.c.splice(index,1);
}
}
