import { CommonModule } from '@angular/common';
import { Component, input, Input, inject } from '@angular/core';
import { ColorsService } from '../service/colors.service';

@Component({
  selector: 'app-color-piece',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './color-piece.component.html',
  styleUrl: './color-piece.component.css'
})
export class ColorPieceComponent {

  @Input() colorCode: string = ""; // Correct usage of @Input decorator

  colorsService = inject(ColorsService);

  onClick() {
    console.log(this.colorCode)
    this.colorsService.setColor(this.colorCode);;
  }

}
