import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstComponent } from './est.component';

describe('EstComponent', () => {
  let component: EstComponent;
  let fixture: ComponentFixture<EstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
