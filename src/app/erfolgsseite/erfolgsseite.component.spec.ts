import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErfolgsseiteComponent } from './erfolgsseite.component';

describe('ErfolgsseiteComponent', () => {
  let component: ErfolgsseiteComponent;
  let fixture: ComponentFixture<ErfolgsseiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErfolgsseiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErfolgsseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
