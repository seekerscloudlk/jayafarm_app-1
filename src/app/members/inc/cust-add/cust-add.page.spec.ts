import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustAddPage } from './cust-add.page';

describe('CustAddPage', () => {
  let component: CustAddPage;
  let fixture: ComponentFixture<CustAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
