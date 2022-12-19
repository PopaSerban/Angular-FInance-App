import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingsRecordTableComponent } from './spendings-record-table.component';

describe('SpendingsRecordTableComponent', () => {
  let component: SpendingsRecordTableComponent;
  let fixture: ComponentFixture<SpendingsRecordTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendingsRecordTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendingsRecordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
