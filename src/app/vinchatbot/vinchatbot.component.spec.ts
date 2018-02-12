import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinchatbotComponent } from './vinchatbot.component';

describe('VinchatbotComponent', () => {
  let component: VinchatbotComponent;
  let fixture: ComponentFixture<VinchatbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinchatbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinchatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
