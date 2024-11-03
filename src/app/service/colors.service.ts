import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IColor {
  name: string,
  code: string
}

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() { }

  choosenColor = signal("#fff");

  colors: IColor[] = [
    { name: 'Red', code: '#ff0000' },
    { name: 'Blue', code: '#0000ff' },
    { name: 'Green', code: '#00ff00' },
    { name: 'Yellow', code: '#ffff00' },
    { name: 'Purple', code: '#800080' },
    { name: 'Orange', code: '#ffa500' },
    { name: 'Pink', code: '#ffc0cb' },
    { name: 'Brown', code: '#a52a2a' },
    { name: 'Gray', code: '#808080' },
    { name: 'Black', code: '#000000' },
    { name: 'Cyan', code: '#00ffff' },
    { name: 'Magenta', code: '#ff00ff' }
  ];

  getAllColors(): IColor[] {
    return this.colors;
  }

  setColor(color: string) {
    this.choosenColor.set(color)
  }

  getCurrentColor() {
    return this.choosenColor();
  }


}
