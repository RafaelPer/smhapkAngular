import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArCondicionadoPage } from './ar-condicionado.page';

describe('ArCondicionadoPage', () => {
  let component: ArCondicionadoPage;
  let fixture: ComponentFixture<ArCondicionadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArCondicionadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArCondicionadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
