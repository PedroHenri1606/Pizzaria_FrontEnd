import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentodetailsComponent } from './acompanhamentodetails.component';

describe('AcompanhamentodetailsComponent', () => {
  let component: AcompanhamentodetailsComponent;
  let fixture: ComponentFixture<AcompanhamentodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcompanhamentodetailsComponent]
    });
    fixture = TestBed.createComponent(AcompanhamentodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
