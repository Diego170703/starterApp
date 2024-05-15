import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackupsPage } from './backups.page';

describe('BackupsPage', () => {
  let component: BackupsPage;
  let fixture: ComponentFixture<BackupsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
