import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlGroupListComponent } from './control-group-list.component';

describe('ControlGroupListComponent', () => {
  let component: ControlGroupListComponent;
  let fixture: ComponentFixture<ControlGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlGroupListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
