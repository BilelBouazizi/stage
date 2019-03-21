import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzDisplayComponent } from './adz-display.component';

describe('AdzDisplayComponent', () => {
  let component: AdzDisplayComponent;
  let fixture: ComponentFixture<AdzDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
