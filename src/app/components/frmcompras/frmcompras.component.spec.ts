import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmcomprasComponent } from './frmcompras.component';

describe('FrmcomprasComponent', () => {
  let component: FrmcomprasComponent;
  let fixture: ComponentFixture<FrmcomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmcomprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
