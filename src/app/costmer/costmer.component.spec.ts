import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostmerComponent } from './costmer.component';

describe('CostmerComponent', () => {
  let component: CostmerComponent;
  let fixture: ComponentFixture<CostmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostmerComponent]
    });
    fixture = TestBed.createComponent(CostmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
