/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GodlikeComponent } from './godlike.component';

describe('GodlikeComponent', () => {
  let component: GodlikeComponent;
  let fixture: ComponentFixture<GodlikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodlikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
