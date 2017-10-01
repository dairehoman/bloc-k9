import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Configuration } from '../configuration';
import { DataService } from '../data.service';
import { MicroChipComponent } from './MicroChip.component';
import {MicroChipService} from './MicroChip.service';
describe('MicroChipComponent', () => {
  let component: MicroChipComponent;
  let fixture: ComponentFixture<MicroChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroChipComponent ],
imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
providers: [MicroChipService,DataService,Configuration]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
