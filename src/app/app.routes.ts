import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; 
import { LayoutComponent } from './components/layout/layout.component';
import { Component } from '@angular/core';
import { ListausuariosComponent } from './components/listausuarios/listausuarios.component';
import { PostusuariosComponent } from './components/postusuarios/postusuarios.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { FormproductComponent } from './components/formproduct/formproduct.component';
import { PostproductosComponent } from './components/postproductos/postproductos.component';
import { PutproductosComponent } from './components/putproductos/putproductos.component';
import { FrmcomprasComponent } from './components/frmcompras/frmcompras.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { NegocioComponent } from './components/negocio/negocio.component';
import { EstComponent } from './components/est/est.component';
import { RepcomprasComponent } from './components/repcompras/repcompras.component';
import { RepventasComponent } from './components/repventas/repventas.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';

export const routes: Routes = [
  { path: '', component:LayoutComponent },
   {
    path:"layout",component:LayoutComponent,
    children:[
      {
        path:'lusuarios',component:ListausuariosComponent
      },
      {
       path:'cusuarios',component:PostusuariosComponent
      },
      {
        path:'updusuarios/:id',component:UpdateuserComponent
      },

      {
        path:'products',component:ProductosComponent
      },
      {
        path:'categorias',component:CategoriasComponent
      },
      {
        path:'addproducto',component:PostproductosComponent
      },
      {
        path:'putproducto',component:PutproductosComponent
      },
      {
        path:'compras',component:FrmcomprasComponent
      },
      {
        path:'facturas',component:FacturasComponent
      },
      {
        path:'negocio',component:NegocioComponent
      },
      {
        path:'est',component:EstComponent
      },
      {
        path:'repcompras',component:RepcomprasComponent
      },
      {
        path:'repventas',component:RepventasComponent
      },
      {
        path:'sucursales',component:SucursalesComponent
      }
    ]
   }
];