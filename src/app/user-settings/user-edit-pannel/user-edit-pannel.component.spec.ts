import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditPannelComponent } from './user-edit-pannel.component';

describe('UserEditPannelComponent', () => {
  let component: UserEditPannelComponent;
  let fixture: ComponentFixture<UserEditPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditPannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEditPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
