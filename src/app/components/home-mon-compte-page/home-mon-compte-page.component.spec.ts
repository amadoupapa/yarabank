import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMonComptePageComponent } from './home-mon-compte-page.component';

describe('HomeMonComptePageComponent', () => {
  let component: HomeMonComptePageComponent;
  let fixture: ComponentFixture<HomeMonComptePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMonComptePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeMonComptePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
