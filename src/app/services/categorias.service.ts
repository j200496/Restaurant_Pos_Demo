import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';
import { categorias } from '../core/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private urlcategorias = 'http://localhost:7010/api/categorias';

  http = inject(HttpClient);

  getcategorias(): Observable<any>{
    return this.http.get<any>(this.urlcategorias);
  }
addcategorias(cat: categorias): Observable<categorias> {
  return this.http.post<categorias>(`${this.urlcategorias}/AddCat/`, cat, {
    headers: { 'Content-Type': 'application/json' }
  });
}
DeletCat(id: number): Observable<any>{
return this.http.put<any>(`${this.urlcategorias}/borrar${id}`,{});
}
}
