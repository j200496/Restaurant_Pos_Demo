import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepventasComponent } from './repventas.component';

describe('RepventasComponent', () => {
  let component: RepventasComponent;
  let fixture: ComponentFixture<RepventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepventasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
