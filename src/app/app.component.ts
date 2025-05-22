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
  isDarkMode = signal(false);
  backgroundColor = signal<string>(this.isDarkMode() ? '#121212' : '#FFFFFF');

  colorsService = inject(ColorsService);

  constructor() {
    // Optional: Set initial theme based on system preference or saved choice
    // This example defaults to light theme as per isDarkMode signal initial value
    this.updateBodyClass();
  }

  toggleTheme(): void {
    this.isDarkMode.set(!this.isDarkMode());
    this.updateBodyClass();
    this.backgroundColor.set(this.isDarkMode() ? '#121212' : '#FFFFFF');
  }

  private updateBodyClass(): void {
    if (this.isDarkMode()) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  ngDoCheck(): void {
    // The main background color is now theme-dependent.
    // If colorsService.getCurrentColor() was meant for specific components
    // or a dynamic part of the theme, that logic would need to be integrated here
    // or in the respective components. For now, the direct set from service is removed
    // in favor of theme-based background.
    // If you still need colorsService for other purposes, it's available.
    // Example: console.log('Current color from service:', this.colorsService.getCurrentColor());
  }

}
