import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlterPasswdPage } from './alter-passwd.page';

describe('AlterPasswdPage', () => {
  let component: AlterPasswdPage;
  let fixture: ComponentFixture<AlterPasswdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterPasswdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlterPasswdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
