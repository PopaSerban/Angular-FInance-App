import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingCatTableComponent } from './spending-cat-table.component';

describe('SpendingCatTableComponent', () => {
  let component: SpendingCatTableComponent;
  let fixture: ComponentFixture<SpendingCatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendingCatTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendingCatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
