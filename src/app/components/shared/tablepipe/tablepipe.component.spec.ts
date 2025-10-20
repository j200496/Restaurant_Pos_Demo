import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepipeComponent } from './tablepipe.component';

describe('TablepipeComponent', () => {
  let component: TablepipeComponent;
  let fixture: ComponentFixture<TablepipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablepipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
