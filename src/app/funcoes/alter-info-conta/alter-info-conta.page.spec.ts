import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlterInfoContaPage } from './alter-info-conta.page';

describe('AlterInfoContaPage', () => {
  let component: AlterInfoContaPage;
  let fixture: ComponentFixture<AlterInfoContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterInfoContaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlterInfoContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
