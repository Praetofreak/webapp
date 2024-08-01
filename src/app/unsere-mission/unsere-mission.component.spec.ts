import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsereMissionComponent } from './unsere-mission.component';

describe('UnsereMissionComponent', () => {
  let component: UnsereMissionComponent;
  let fixture: ComponentFixture<UnsereMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsereMissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnsereMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
