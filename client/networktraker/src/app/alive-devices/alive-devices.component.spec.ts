import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliveDevicesComponent } from './alive-devices.component';

describe('AliveDevicesComponent', () => {
  let component: AliveDevicesComponent;
  let fixture: ComponentFixture<AliveDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliveDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliveDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
