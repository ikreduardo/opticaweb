import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStoreComponent } from './table-store.component';

describe('TableStoreComponent', () => {
  let component: TableStoreComponent;
  let fixture: ComponentFixture<TableStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
