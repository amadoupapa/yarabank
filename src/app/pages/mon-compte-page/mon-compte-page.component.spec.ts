import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComptePageComponent } from './mon-compte-page.component';

describe('MonComptePageComponent', () => {
  let component: MonComptePageComponent;
  let fixture: ComponentFixture<MonComptePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonComptePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonComptePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
