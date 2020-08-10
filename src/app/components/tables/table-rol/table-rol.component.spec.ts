import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRolComponent } from './table-rol.component';

describe('TableRolComponent', () => {
  let component: TableRolComponent;
  let fixture: ComponentFixture<TableRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
