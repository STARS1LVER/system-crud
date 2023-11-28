import { SystemCrudService } from './../../src/app/system-crud/services/system-crud.service';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Firestore } from '@angular/fire/firestore';


class ComponentTestRoute {

}



describe('SystemCrudService',() =>{

  let service: SystemCrudService;
  let firestoreMock: any

  // configuration test bed
  beforeEach(() => {

    firestoreMock = {
      collection: jest.fn(),
      doc: jest.fn(),
      getDoc: jest.fn(),
      addDoc: jest.fn(),
      updateDoc: jest.fn(),
      deleteDoc: jest.fn()
    };

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([
        { path: 'system/table', component: ComponentTestRoute  },
      ])]
      ,
      providers: [SystemCrudService, {provide: Firestore, useValue: firestoreMock}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents()
  })

  beforeEach(() => {
    service = TestBed.inject(SystemCrudService)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  test('Fisrt test', () => {
    expect(service).toBeTruthy()
  })










})
