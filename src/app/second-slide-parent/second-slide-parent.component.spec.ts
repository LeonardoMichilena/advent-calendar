import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSlideParentComponent } from './second-slide-parent.component';

describe('SecondSlideParentComponent', () => {
  let component: SecondSlideParentComponent;
  let fixture: ComponentFixture<SecondSlideParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondSlideParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSlideParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
