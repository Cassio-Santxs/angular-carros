import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  standalone: true,
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss',
  imports: [
    CommonModule 
  ]
})
export class PrincipalComponent {
  nomesList: string[] = ['João', 'Maria', 'José'];
}
