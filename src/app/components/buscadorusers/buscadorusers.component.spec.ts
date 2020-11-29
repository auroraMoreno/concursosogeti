import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorusersComponent } from './buscadorusers.component';

describe('BuscadorusersComponent', () => {
  let component: BuscadorusersComponent;
  let fixture: ComponentFixture<BuscadorusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
