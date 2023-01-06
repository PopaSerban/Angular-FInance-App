import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsMainScreenComponent } from './rooms-main-screen.component';

describe('RoomsMainScreenComponent', () => {
  let component: RoomsMainScreenComponent;
  let fixture: ComponentFixture<RoomsMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsMainScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
