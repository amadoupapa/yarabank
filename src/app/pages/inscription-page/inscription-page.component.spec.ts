import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionPageComponent } from './inscription-page.component';

describe('InscriptionPageComponent', () => {
  let component: InscriptionPageComponent;
  let fixture: ComponentFixture<InscriptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
