import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustInfoPage } from './cust-info.page';

describe('CustInfoPage', () => {
  let component: CustInfoPage;
  let fixture: ComponentFixture<CustInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
