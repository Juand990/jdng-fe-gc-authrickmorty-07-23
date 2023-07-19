import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormanadirComponent } from './formanadir.component';

describe('FormanadirComponent', () => {
  let component: FormanadirComponent;
  let fixture: ComponentFixture<FormanadirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormanadirComponent]
    });
    fixture = TestBed.createComponent(FormanadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
