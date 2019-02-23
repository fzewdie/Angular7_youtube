import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrezerComponent } from './frezer.component';

describe('FrezerComponent', () => {
  let component: FrezerComponent;
  let fixture: ComponentFixture<FrezerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrezerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrezerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
