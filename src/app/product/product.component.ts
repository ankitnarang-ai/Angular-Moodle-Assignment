import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  products: any = [
    {
      name: 'Angular Basics',
      description: 'Learn the fundamentals of Angular',
      price: 99,
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg'
    },
    {
      name: 'TypeScript Mastery',
      description: 'Master TypeScript for scalable web development',
      price: 149,
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      name: 'JavaScript Essentials',
      description: 'Build dynamic web applications with JavaScript',
      price: 199,
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Testing with Jest',
      description: 'Learn unit and integration testing with Jest',
      price: 129,
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
    },
    {
      name: 'NPM & Performance Optimization',
      description: 'Optimize your projects using npm tools and best practices',
      price: 179,
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
    },
    {
      name: 'Advanced TypeScript',
      description: 'Deep dive into TypeScript for Angular development',
      price: 119,
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg'
    }
  ];
  
}
