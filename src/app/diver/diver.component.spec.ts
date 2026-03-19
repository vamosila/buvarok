import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiverComponent } from './diver.component';

describe('DiverComponent', () => {
  let component: DiverComponent;
  let fixture: ComponentFixture<DiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
