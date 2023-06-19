import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVantagensComponent } from './app-vantagens.component';

describe('AppVantagensComponent', () => {
  let component: AppVantagensComponent;
  let fixture: ComponentFixture<AppVantagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppVantagensComponent]
    });
    fixture = TestBed.createComponent(AppVantagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
