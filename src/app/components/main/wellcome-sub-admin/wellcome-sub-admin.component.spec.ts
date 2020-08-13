import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeSubAdminComponent } from './wellcome-sub-admin.component';

describe('WellcomeSubAdminComponent', () => {
  let component: WellcomeSubAdminComponent;
  let fixture: ComponentFixture<WellcomeSubAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellcomeSubAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomeSubAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
