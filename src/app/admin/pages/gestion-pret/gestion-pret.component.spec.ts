import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPretComponent } from './gestion-pret.component';

describe('GestionPretComponent', () => {
  let component: GestionPretComponent;
  let fixture: ComponentFixture<GestionPretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionPretComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionPretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
