import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() product: { 
    name: string; 
    description: string; 
    price: number;
    image?: string
  } = { name: '', description: '', price: 0, image:'' };


}