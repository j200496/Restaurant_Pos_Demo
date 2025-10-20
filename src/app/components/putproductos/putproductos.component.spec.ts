import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutproductosComponent } from './putproductos.component';

describe('PutproductosComponent', () => {
  let component: PutproductosComponent;
  let fixture: ComponentFixture<PutproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutproductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
