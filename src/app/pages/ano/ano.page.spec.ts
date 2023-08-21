import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnoPage } from './ano.page';

describe('AnoPage', () => {
  let component: AnoPage;
  let fixture: ComponentFixture<AnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
