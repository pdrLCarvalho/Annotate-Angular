import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaksBarComponent } from './taks-bar.component';

describe('TaksBarComponent', () => {
  let component: TaksBarComponent;
  let fixture: ComponentFixture<TaksBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaksBarComponent]
    });
    fixture = TestBed.createComponent(TaksBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
