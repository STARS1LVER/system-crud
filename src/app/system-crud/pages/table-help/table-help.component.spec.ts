import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHelpComponent } from './table-help.component';

describe('TableHelpComponent', () => {
  let component: TableHelpComponent;
  let fixture: ComponentFixture<TableHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
