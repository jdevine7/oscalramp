import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFamilyListComponent } from './control-family-list.component';

describe('ControlGroupListComponent', () => {
  let component: ControlFamilyListComponent;
  let fixture: ComponentFixture<ControlFamilyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlFamilyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlFamilyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
