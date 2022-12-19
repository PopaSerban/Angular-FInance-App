import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingCardsComponent } from './spending-cards.component';

describe('SpendingCardsComponent', () => {
  let component: SpendingCardsComponent;
  let fixture: ComponentFixture<SpendingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendingCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
