import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcomprasComponent } from './repcompras.component';

describe('RepcomprasComponent', () => {
  let component: RepcomprasComponent;
  let fixture: ComponentFixture<RepcomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepcomprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
