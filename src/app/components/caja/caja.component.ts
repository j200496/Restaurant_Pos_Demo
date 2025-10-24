import { Component,inject } from '@angular/core';
import { TableComponent } from "../shared/table/table.component";
import { TablepipeComponent } from "../shared/tablepipe/tablepipe.component";
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Prodcaja } from '../../core/Prodcaja';
import { FormsModule } from '@angular/forms';
import { FoodtruckService } from '../../foodtruck.service';

@Component({
  selector: 'app-caja',
  imports: [CommonModule, CurrencyPipe,FormsModule],
  templateUrl: './caja.component.html',
  styleUrl: './caja.component.css'
})
export class CajaComponent {
alertservice = inject(FoodtruckService)
th:any[]=[
  'Producto','Descripcion','Cantidad','Precio'
]
productos:any[] =[
  {nombre:'Hot Dog',descripcion:'Pollo',categoria:'Hot Dog',precio:160,cantidad:0},
  {nombre:'Hamburguer',descripcion:'Res',categoria:'Hamburguer',precio:360,cantidad:0},
  {nombre:'Tacos',descripcion:'Pollo',categoria:'Tacos',precio:260,cantidad:0},
  {nombre:'Tacos',descripcion:'Cerdo',categoria:'Tacos',precio:260,cantidad:0},
  {nombre:'Yaroa',descripcion:'Cerdo',categoria:'Yaroa',precio:260,cantidad:0},
  {nombre:'Sandwich',descripcion:'Pollo',categoria:'Sandwich',precio:260,cantidad:0},
  {nombre:'Tacos',descripcion:'Res',categoria:'Tacos',precio:260,cantidad:0}
]
Categorias: string[] = ['Filtrar por categorias','Hamburguer','Hot Dog','Tacos','Sandwich','Yaroa']
prod: Prodcaja[] =[]
productosFiltrados: any[] = [...this.productos];
Filtrarporcategorias(categoria:string){
  if(categoria === 'Filtrar por categorias'){
    this.productosFiltrados=[...this.productos];
  }else {
      this.productosFiltrados = this.productos.filter(p => p.Categoria === categoria);
    }
}
VistaFactura(){
  
}
Agregar(p: Prodcaja){
  if(p.cantidad <= 0){
    this.alertservice.warning("Ingrese la cantidad por favor!","La cantidad seleccionada esta en 0","red");
    return;
  }
  const pexistente = this.prod.find(e => e.nombre == p.nombre && e.descripcion == p.descripcion) 
  if(pexistente){
    pexistente.cantidad += p.cantidad
  }else{
    this.prod.push({...p})
  }
}
Borrar(id:number){
this.prod.splice(id,1);
}
get totalGeneral(): number {
  return this.prod.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
}

}
