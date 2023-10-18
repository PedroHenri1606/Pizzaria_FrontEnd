import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentolistComponent } from './acompanhamentolist.component';

describe('AcompanhamentolistComponent', () => {
  let component: AcompanhamentolistComponent;
  let fixture: ComponentFixture<AcompanhamentolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcompanhamentolistComponent]
    });
    fixture = TestBed.createComponent(AcompanhamentolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
