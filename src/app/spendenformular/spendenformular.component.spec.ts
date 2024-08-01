import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendenformularComponent } from './spendenformular.component';

describe('SpendenformularComponent', () => {
  let component: SpendenformularComponent;
  let fixture: ComponentFixture<SpendenformularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendenformularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpendenformularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
