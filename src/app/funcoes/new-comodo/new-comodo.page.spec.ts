import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewComodoPage } from './new-comodo.page';

describe('NewComodoPage', () => {
  let component: NewComodoPage;
  let fixture: ComponentFixture<NewComodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComodoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewComodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
