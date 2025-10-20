import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostproductosComponent } from './postproductos.component';

describe('PostproductosComponent', () => {
  let component: PostproductosComponent;
  let fixture: ComponentFixture<PostproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostproductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
