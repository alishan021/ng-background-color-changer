import { Component, DoCheck, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorBoardComponent } from "./color-board/color-board.component";
import { CommonModule } from '@angular/common';
import { ColorsService } from './service/colors.service';
// import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ColorBoardComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck {

  backgroundColor = signal<string>('#fff');

  colorsService = inject(ColorsService);

  ngDoCheck(): void {
    this.backgroundColor.set(this.colorsService.getCurrentColor());
  }

}
