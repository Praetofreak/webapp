import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GespendetComponent } from './gespendet.component';

describe('GespendetComponent', () => {
  let component: GespendetComponent;
  let fixture: ComponentFixture<GespendetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GespendetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GespendetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
