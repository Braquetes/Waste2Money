import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaComponent } from './ayuda.component';

describe('AyudaComponent', () => {
  let component: AyudaComponent;
  let fixture: ComponentFixture<AyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
