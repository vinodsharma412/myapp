import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenbersComponent } from './menbers.component';

describe('MenbersComponent', () => {
  let component: MenbersComponent;
  let fixture: ComponentFixture<MenbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
