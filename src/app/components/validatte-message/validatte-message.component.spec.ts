import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatteMessageComponent } from './validatte-message.component';

describe('ValidatteMessageComponent', () => {
  let component: ValidatteMessageComponent;
  let fixture: ComponentFixture<ValidatteMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatteMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatteMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
