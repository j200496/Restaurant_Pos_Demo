import { Component,Input, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { compras } from '../../../core/compras';

@Component({
  selector: 'app-tablepipe',
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './tablepipe.component.html',
  styleUrl: './tablepipe.component.css'
})
export class TablepipeComponent implements OnChanges{
@Output() metodo = new EventEmitter<any>()
@Output() total = new EventEmitter<any>()
@Input() headers: string[] = [];
@Input() data: any[] = [];
@Input() btntext!: string;

ngOnChanges(): void {
  this.emitirTotal();
}
emitirTotal() {
    const tot = this.data.reduce((sum, item) => sum + item.montototal, 0);
    this.total.emit(tot);
  }
Borrar(index:number){
  this.metodo.emit(index);
    this.emitirTotal();
}
}
