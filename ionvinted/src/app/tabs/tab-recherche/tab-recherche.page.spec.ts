import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabRecherchePage } from './tab-recherche.page';

describe('TabRecherchePage', () => {
  let component: TabRecherchePage;
  let fixture: ComponentFixture<TabRecherchePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRecherchePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabRecherchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
