import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmproductosComponent } from './frmproductos.component';

describe('FrmproductosComponent', () => {
  let component: FrmproductosComponent;
  let fixture: ComponentFixture<FrmproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmproductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
