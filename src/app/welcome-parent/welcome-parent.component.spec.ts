import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeParentComponent } from './welcome-parent.component';

describe('WelcomeParentComponent', () => {
  let component: WelcomeParentComponent;
  let fixture: ComponentFixture<WelcomeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
