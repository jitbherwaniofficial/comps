import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeHomeComponent } from './mode-home.component';

describe('ModeHomeComponent', () => {
  let component: ModeHomeComponent;
  let fixture: ComponentFixture<ModeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
