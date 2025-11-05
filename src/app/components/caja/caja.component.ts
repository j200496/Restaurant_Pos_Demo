import { Component,inject,ViewChild,ElementRef  } from '@angular/core';
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
cliente:string = "N/A";
th:any[]=[
  'Producto','Descripcion','Cantidad','Precio'
]
  @ViewChild('facturaPrint') facturaPrint!: ElementRef;
productos:any[] =[
  {nombre:'Hot Dog',descripcion:'Pollo',categoria:'Hot Dog',precio:160,cantidad:0},
  {nombre:'Hamburgesa',descripcion:'De res',categoria:'Hamburguer',precio:360,cantidad:0},
  {nombre:'Hamburgesa',descripcion:'Bcon cheese',categoria:'Hamburguer',precio:360,cantidad:0},
   {nombre:'Hamburgesa',descripcion:'De pollo',categoria:'Hamburguer',precio:360,cantidad:0},
  {nombre:'Tacos',descripcion:'Pollo',categoria:'Tacos',precio:260,cantidad:0},
  {nombre:'Tacos',descripcion:'Cerdo',categoria:'Tacos',precio:260,cantidad:0},
  {nombre:'Yaroa',descripcion:'Cerdo',categoria:'Yaroa',precio:260,cantidad:0},
  {nombre:'Sandwich',descripcion:'Pollo',categoria:'Sandwich',precio:260,cantidad:0},
  {nombre:'Jugo',descripcion:'Naranja',categoria:'Bebidas',precio:100,cantidad:0},
  {nombre:'Refresco',descripcion:'Coca cola',categoria:'Bebidas',precio:80,cantidad:0},
  {nombre:'Tacos',descripcion:'Res',categoria:'Tacos',precio:260,cantidad:0}
]
Categorias: string[] = ['Filtrar por categorias','Hamburguer','Hot Dog','Tacos','Sandwich','Yaroa']
filtro: string = "";
filtrarprod: any[] = [...this.productos];
BuscarProd() {
  const texto = this.filtro.toLowerCase().trim();
  this.filtrarprod = this.productos.filter(p =>
    p.nombre.toLowerCase().includes(texto) || p.categoria.toLowerCase().includes(texto)
    || p.descripcion.toLowerCase().includes(texto)
  );
}
prod: Prodcaja[] =[]
productosFiltrados: any[] = [...this.productos];
textcat: string = "Filtrar por categorias";
fecha = new Date()
fechahoy = this.fecha.toLocaleDateString()
Filtrarporcategorias(){
  const texto = this.textcat;
this.filtrarprod = texto
  ? this.productos.filter(p => p.categoria.toLowerCase().includes(texto))
  : [...this.productos];


}
Increase(c:any){
  c.cantidad ++;
}

Decrease(c:any){
  if(c.cantidad > 0){
    c.cantidad --;
  }
}
 abrirVistaPrevia() {

const modal = document.getElementById('vistaPreviaModal');

if (!this.prod || this.prod.length === 0) {
  this.alertservice.warning("No hay productos para facturar","Error","red");
    return; 
  }
if (modal) {
  const bootstrapModal = new (window as any).bootstrap.Modal(modal);
  bootstrapModal.show();
    }
  }
  imprimirFactura() {
    // Imprime el contenido del div facturaPrint
    //this.printService.printElement(this.facturaPrint.nativeElement);
  }

imprimirFacturaw() {
 const contenido = document.getElementById('vistaPreviaModal')?.innerHTML;

    if (contenido) {
      const ventana = window.open('', '', 'width=400,height=600');
      if (ventana) {
        ventana.document.write(`
        <html>
  <head>
    <title>Factura</title>
    <style>
      body {
        font-family: monospace;
        font-size: 11px;
        width: 58mm;
        padding: 5px;
        margin: 0;
      }
      table {
        width: 80%;
        border-collapse: collapse;
        font-size: 10;
      }
        button{
        display:none;
        }
        .modal-header{
        display:none;
        }
        h3{
        padding-left:55px;
        }
       .pf{
         margin-bottom: 5px;
          }
      th, td {
        border-bottom: 1px dashed #000;
        padding: 1px 0;
        text-align: left;
      }
        h5{
        padding: 2px;
        font-size: 12px;
        margin-top: 2px;
        }
      p {
        margin-bottom: 0;
        margin-top: 0;
      }
      @page {
        size: 58mm auto;
        margin: 0;
      }
    </style>
  </head>
  <body>
    ${contenido}
  </body>
</html>

        `);
        ventana.document.close();
        ventana.focus();
        ventana.print();
        ventana.close();

}
 }
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
