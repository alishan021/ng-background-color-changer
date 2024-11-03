import { Component, inject, OnInit } from '@angular/core';
import { ColorPieceComponent } from '../color-piece/color-piece.component';
import { ColorsService, IColor } from '../service/colors.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-board',
  standalone: true,
  imports: [ ColorPieceComponent, CommonModule ],
  templateUrl: './color-board.component.html',
  styleUrl: './color-board.component.css'
})
export class ColorBoardComponent  implements OnInit{

  colors$: IColor[] = [];

  colorsService = inject(ColorsService);

  constructor() {}

  ngOnInit() {
    this.colors$ = this.colorsService.getAllColors();
  }

}
