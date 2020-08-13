import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMydriversComponent } from './table-mydrivers.component';

describe('TableMydriversComponent', () => {
  let component: TableMydriversComponent;
  let fixture: ComponentFixture<TableMydriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMydriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMydriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
