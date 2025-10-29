import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecomprasComponent } from './tablecompras.component';

describe('TablecomprasComponent', () => {
  let component: TablecomprasComponent;
  let fixture: ComponentFixture<TablecomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablecomprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablecomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
