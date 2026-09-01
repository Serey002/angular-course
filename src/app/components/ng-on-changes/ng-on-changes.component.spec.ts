import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgOnChangesComponent } from './ng-on-changes.component';

describe('NgOnChangesComponent', () => {
  let component: NgOnChangesComponent;
  let fixture: ComponentFixture<NgOnChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgOnChangesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgOnChangesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
