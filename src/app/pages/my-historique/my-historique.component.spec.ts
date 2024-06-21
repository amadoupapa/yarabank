import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHistoriqueComponent } from './my-historique.component';

describe('MyHistoriqueComponent', () => {
  let component: MyHistoriqueComponent;
  let fixture: ComponentFixture<MyHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHistoriqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
