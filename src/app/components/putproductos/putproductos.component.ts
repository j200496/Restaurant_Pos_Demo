import { Component,Input,inject, OnInit, numberAttribute } from '@angular/core';
import { FrmproductosComponent } from "../shared/frmproductos/frmproductos.component";
import { FoodtruckService } from '../../foodtruck.service';
import { ProductosService } from '../../services/productos.service';
import { Products } from '../../core/Products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-putproductos',
  imports: [FrmproductosComponent],
  templateUrl: './putproductos.component.html',
  styleUrl: './putproductos.component.css'
})
export class PutproductosComponent implements OnInit{
  service = inject(ProductosService)
  alert = inject(FoodtruckService);
  route = inject(Router);
@Input({transform: numberAttribute}) id!: number;
 model!: any;
 
Actualizar(prod:any) {
  if(!this.id || !prod){
    this.alert.warning('Error!','No se pudieron actualizar los datos!','red');
    return;
  }
  this.service.PutProd(this.id,prod).subscribe(()=>{
    this.alert.success('Producto actualizado!','Producto actualizado','blue').then(res => {
      if(res.isConfirmed){
 this.route.navigateByUrl('/layout/products')
      }
    })
   
  })
}


 ngOnInit(): void {
   this.getprod();
 }

 getprod(){
 this.service.Get1Product(this.id).subscribe(p =>{
  this.model = p;
 }
)}
}