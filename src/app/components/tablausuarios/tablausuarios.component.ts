import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tablausuarios',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './tablausuarios.component.html',
  styleUrl: './tablausuarios.component.css'
})
export class TablausuariosComponent {
@Input() headers:any[] = []
@Input() data:any[] = []
}
