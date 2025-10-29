import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tablecompras',
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './tablecompras.component.html',
  styleUrl: './tablecompras.component.css'
})
export class TablecomprasComponent {
@Input() headers: string[] = [];
@Input() data: any[] = [];
}
