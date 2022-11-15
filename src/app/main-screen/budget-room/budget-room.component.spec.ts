import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetRoomComponent } from './budget-room.component';

describe('BudgetRoomComponent', () => {
  let component: BudgetRoomComponent;
  let fixture: ComponentFixture<BudgetRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
