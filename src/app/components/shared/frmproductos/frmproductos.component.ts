import { CommonModule } from '@angular/common';
import { Component,inject,Input, OnInit,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CategoriasService } from '../../../services/categorias.service';
import { Products } from '../../../core/Products';
import { ProductosService } from '../../../services/productos.service';
import { FoodtruckService } from '../../../foodtruck.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-frmproductos',
  imports: [CommonModule,RouterLink,ReactiveFormsModule,FormsModule],
  templateUrl: './frmproductos.component.html',
  styleUrl: './frmproductos.component.css'
})
export class FrmproductosComponent implements OnInit {
 @Input() modelo?: any;
   @Input() isupdate: boolean = false;
 @Input() titulo! :string;
  @Input() btnnombre! :string;
  @Input() clase! :string;
@Output() method = new EventEmitter<any>();
  texto!: string;
  idi!:number;
categorias: any[] = [];
productos: Products[] = [];
selectedProducto: Products = { idProducto:0, nombre:'', descripcion:'', 
precio:0, itbis:0, precioFinal:0, estado:'', categoria:'' };

catservice = inject(CategoriasService);
prodservice = inject(ProductosService);
alertservice = inject(FoodtruckService);
route = inject(Router);
  formbuilder = inject(FormBuilder)

  form = this.formbuilder.group({
    idProducto:[0],
    nombre: [''],
    descripcion: [''],
    precio: [0],
    itbis: [0],
    precioFinal: [0],
    estado: [''],
    categoria: ['']
})
 productoform = new FormControl({
  idProducto: new FormControl(0),
    nombre:new FormControl(""),
    descripcion:new FormControl("") ,
    precio:new FormControl(0),
    estado:new FormControl(""),
    categoria: new FormControl(),
    tibis:new FormControl(0),
    precioFinal:new FormControl("")
 })
 AddProd(){
  const data = this.form.value as Products;
   const {nombre, descripcion,precio,estado,itbis,categoria,precioFinal} = this.form.value;
if (!nombre || !descripcion || precio == null || !estado || itbis == null || !categoria || precioFinal == null) {
  this.alertservice.error("Todos los campos son obligatorios","Error","red");
  return;
}
  this.prodservice.AddProducto(data).subscribe(() =>{
    this.alertservice.success("Producto agregado","Producto agregado","blue");
    this.form.reset;
  })
 }
 GetCat(){
  this.catservice.getcategorias().subscribe( c => {
    this.categorias = c;
  })
 }
ngOnInit(): void {
  this.GetCat();
  if(this.modelo !== undefined){
   this.form.patchValue(this.modelo);
  }
  this.form.valueChanges.subscribe(values => {
    const precio = values.precio ?? 0;
    const itbis = values.itbis ?? 0;

    const total = precio + (precio * itbis / 100);
    this.form.get('precioFinal')?.setValue(parseFloat(total.toFixed(2)));
  });


}
itbis!:number;
precio!:number;
preciototal!: number;
ITBIS(){
this.preciototal = this.itbis * this.precio;
}
Act(prod: any){
  this.method.emit(prod);
}
Actualizar(prod: Products) {
if(!this.idi || !prod){
  console.log(this.idi);
  return;
}
  console.log("ID a actualizar:", this.idi, "Objeto:", prod);
  this.prodservice.PutProd(this.idi,prod).subscribe({
    next: () => {
      this.alertservice.success("Producto actualizado!", "Producto actualizado!", "blue")
        .then(res => {
          if (res.isConfirmed) {
            this.route.navigateByUrl('/layout/products');
          }
        });
    },
    error: (err) => {
      console.error("Error al actualizar:", err);
      this.alertservice.error("Error", "No se pudo actualizar el producto", "red");
    }
  });
/*Act(id:number){
this.EditProd.emit(id);
}*/
}
}
