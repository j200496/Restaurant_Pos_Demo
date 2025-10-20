import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostusuariosComponent } from './postusuarios.component';

describe('PostusuariosComponent', () => {
  let component: PostusuariosComponent;
  let fixture: ComponentFixture<PostusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostusuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
