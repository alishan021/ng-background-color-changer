import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPieceComponent } from './color-piece.component';

describe('ColorPieceComponent', () => {
  let component: ColorPieceComponent;
  let fixture: ComponentFixture<ColorPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPieceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
