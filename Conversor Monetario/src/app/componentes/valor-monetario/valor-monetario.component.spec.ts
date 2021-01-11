import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorMonetarioComponent } from './valor-monetario.component';

describe('ValorMonetarioComponent', () => {
  let component: ValorMonetarioComponent;
  let fixture: ComponentFixture<ValorMonetarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorMonetarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorMonetarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
