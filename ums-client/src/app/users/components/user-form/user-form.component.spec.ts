import { FormBuilder } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let fixture: UserFormComponent;
  let fbMock: FormBuilder;
  let usersServiceMock: any;

  beforeEach(() => {
    fbMock = new FormBuilder();
    usersServiceMock = {
      isLoading$: jest.fn(),
      add: jest.fn()
    }

    usersServiceMock.isLoading$.mockReturnValue(of(false));

    fixture = new UserFormComponent(
      fbMock,
      usersServiceMock,
    );
  });

  describe('Setup component', () => {
    it('should init userForm', () => {
      expect(fixture.userForm).toBeDefined();
    });
    it('should get loading indicator', () => {
      expect(fixture.loading$).toBeDefined();
    });
  });

  describe('Initalize password validator ', () => {
    it('should create password validtor', () => {
      const createPassValidatorSpy = jest.spyOn(fixture, 'createPassValidator');

      fixture.ngAfterViewInit();

      expect(createPassValidatorSpy).toBeCalled();
    });
  });

  describe('initForm', () => {
    it('should return new form', () => {
      const formMock = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        description: ''
      }

      expect(fixture.initForm().value).toEqual(formMock);
    });
  });

  describe('Form validation', () => {
    it('should invalidate the form', () => {
      const formMock = {
        firstName: 'roei',
        lastName: 'ada',
        email: 'abc',
        password: 'abc',
        description: 'abc'
      }
      fixture.userForm.setValue(formMock);
      expect(fixture.userForm.valid).toBeFalsy();
    });

    it('should validate the form', () => {
      const formMock = {
        firstName: 'roei',
        lastName: 'ada',
        email: 'abc@walla.com',
        password: 'abcABC1020',
        description: 'abc'
      }
      fixture.userForm.setValue(formMock);
      expect(fixture.userForm.valid).toBeTruthy();
    });
  });

  describe('submitForm', () => {
    it('should call add', () => {
      usersServiceMock.add.mockReturnValue(of({}));
      fixture.submitForm();
      expect(usersServiceMock.add).toBeCalled();
    });

    describe('Added successfully', () => {
      it('should call initForm', () => {
        const initFormSpy = jest.spyOn(fixture, 'initForm');
        usersServiceMock.add.mockReturnValue(of({}));
        fixture.submitForm();
        expect(initFormSpy).toBeCalled();
      });
    });

    //   // Doesnt work
    //   describe('Failed to add', () => {
    //     it('should set err flag', () => {
    //       const err = {
    //         error: {
    //           email: {
    //             kind: 'unique',
    //           }
    //         }
    //       };
    //       usersServiceMock.add.mockReturnValue(throwError(err));
    //       expect(fixture.dupEmail).toBe(true);
    //     });
    //   });
    // });

    describe('createPassValidator', () => {
      it('should set passwor validator', () => {
        fixture.createPassValidator();
        expect(fixture.password?.validator).toBeDefined();
      });
    });


  });
});

