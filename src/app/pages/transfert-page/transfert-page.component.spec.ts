import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertPageComponent } from './transfert-page.component';

describe('TransfertPageComponent', () => {
  let component: TransfertPageComponent;
  let fixture: ComponentFixture<TransfertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransfertPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransfertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
