import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountDetialComponent } from './account-detial.component';

describe('AccountDetialComponent', () => {
  let component: AccountDetialComponent;
  let fixture: ComponentFixture<AccountDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDetialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDetialComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
