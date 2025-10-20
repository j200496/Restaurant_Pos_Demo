import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
private urlsucursal = '';
http = inject(HttpClient)  

Deletsuctursal(id: number) {
return this.http.delete(this.urlsucursal)
}

}
