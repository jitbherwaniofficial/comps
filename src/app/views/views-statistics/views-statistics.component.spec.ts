import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsStatisticsComponent } from './views-statistics.component';

describe('ViewsStatisticsComponent', () => {
  let component: ViewsStatisticsComponent;
  let fixture: ComponentFixture<ViewsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
