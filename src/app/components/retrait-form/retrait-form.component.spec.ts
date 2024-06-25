import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraitFormComponent } from './retrait-form.component';

describe('RetraitFormComponent', () => {
  let component: RetraitFormComponent;
  let fixture: ComponentFixture<RetraitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetraitFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetraitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
