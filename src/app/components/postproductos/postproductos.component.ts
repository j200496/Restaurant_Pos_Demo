import { Component,inject,Output } from '@angular/core';
import { FormproductComponent } from '../formproduct/formproduct.component';
import { PostusuariosComponent } from "../postusuarios/postusuarios.component";
import { FrmproductosComponent } from "../shared/frmproductos/frmproductos.component";
import { ProductosService } from '../../services/productos.service';
import { FoodtruckService } from '../../foodtruck.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Products } from '../../core/Products';

@Component({
  selector: 'app-postproductos',
  imports: [FrmproductosComponent],
  templateUrl: './postproductos.component.html',
  styleUrl: './postproductos.component.css'
})
export class PostproductosComponent {
service = inject(ProductosService);
alertservice = inject(FoodtruckService);
formbuilder = inject(FormBuilder);
form = this.formbuilder.group({
nombre: ['', Validators.required],
    descripcion: [''],
    precio: [0, [Validators.required, Validators.min(1)]],
    itbis: [0, [Validators.required, Validators.min(0)]],
    precioFinal: [0, [Validators.required, Validators.min(0)]],
     estado: [''],
      categoria: ['']
})

guardarProducto(producto: any) {
  this.service.AddProducto(producto).subscribe({
    next: (res) => this.alertservice.warning("Producto agregado","Producto agregado","blue"),
    error: (err) => console.error('Error al guardar', err)
  });
}

}
