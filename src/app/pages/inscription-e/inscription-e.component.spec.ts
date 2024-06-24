import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEComponent } from './inscription-e.component';

describe('InscriptionEComponent', () => {
  let component: InscriptionEComponent;
  let fixture: ComponentFixture<InscriptionEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
