import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderPageComponent } from './valider-page.component';

describe('ValiderPageComponent', () => {
  let component: ValiderPageComponent;
  let fixture: ComponentFixture<ValiderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValiderPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValiderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
