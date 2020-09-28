import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlterComodoPage } from './alter-comodo.page';

describe('AlterComodoPage', () => {
  let component: AlterComodoPage;
  let fixture: ComponentFixture<AlterComodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterComodoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlterComodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
