import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecEstructuralforComponent } from './direc-estructuralfor.component';

describe('DirecEstructuralforComponent', () => {
  let component: DirecEstructuralforComponent;
  let fixture: ComponentFixture<DirecEstructuralforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirecEstructuralforComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirecEstructuralforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
