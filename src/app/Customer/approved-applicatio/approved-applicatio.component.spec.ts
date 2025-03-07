import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedApplicatioComponent } from './approved-applicatio.component';

describe('ApprovedApplicatioComponent', () => {
  let component: ApprovedApplicatioComponent;
  let fixture: ComponentFixture<ApprovedApplicatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovedApplicatioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprovedApplicatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
