import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFamilyComponent } from './control-family.component';

describe('ControlFamilyComponent', () => {
  let component: ControlFamilyComponent;
  let fixture: ComponentFixture<ControlFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlFamilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
