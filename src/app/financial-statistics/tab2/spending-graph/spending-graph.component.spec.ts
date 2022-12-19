import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingGraphComponent } from './spending-graph.component';

describe('SpendingGraphComponent', () => {
  let component: SpendingGraphComponent;
  let fixture: ComponentFixture<SpendingGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendingGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendingGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
