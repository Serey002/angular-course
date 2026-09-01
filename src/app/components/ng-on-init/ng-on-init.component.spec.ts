import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgOnInitComponent } from './ng-on-init.component';

describe('NgOnInitComponent', () => {
  let component: NgOnInitComponent;
  let fixture: ComponentFixture<NgOnInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgOnInitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgOnInitComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
