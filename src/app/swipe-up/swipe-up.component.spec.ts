import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeUpComponent } from './swipe-up.component';

describe('SwipeUpComponent', () => {
  let component: SwipeUpComponent;
  let fixture: ComponentFixture<SwipeUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
