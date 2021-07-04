import { of } from 'rxjs';
import { UsersListComponent } from './users-list.component';

describe('UsersListComponent', () => {
    let fixture: UsersListComponent;
    let usersServiceMock: any;
    let primeConfigMock: any;

    beforeEach(() => {
        usersServiceMock = {
            isLoading$: jest.fn(),
            getUsersPage: jest.fn(),
            generate: jest.fn(),
            deleteAll: jest.fn(),
        }
        primeConfigMock = {
            ripple: false
        }

        usersServiceMock.isLoading$.mockReturnValue(of(false));

        fixture = new UsersListComponent(
            usersServiceMock,
            primeConfigMock
        );
    });

    describe('Setup component', () => {
        it('should get loading indicator', () => {
            expect(fixture.loading$).toBeDefined();
        });
        describe('ngOnInit', () => {
            it('should call getUsersPage', () => {
                const getUsersPageSpy = jest.spyOn(fixture, 'getUsersPage');
                fixture.ngOnInit();
                expect(getUsersPageSpy).toBeCalled();
            });
        });
    });

    describe('loadData', () => {
        it('should call getUsersPage', () => {
            const getUsersPageSpy = jest.spyOn(fixture, 'getUsersPage');
            const event = { first: 10 };
            fixture.loadData(event);
            expect(getUsersPageSpy).toBeCalled();
        });
    });

    describe('generateUsers', () => {
        beforeEach(() => {
            usersServiceMock.generate.mockReturnValue(of({}));
        });

        it('should call generate', () => {
            fixture.generateUsers();
            expect(usersServiceMock.generate).toBeCalled();
        });

        describe('Generated successfully', () => {
            it('should call getUsersPage', () => {
                const getUsersPageSpy = jest.spyOn(fixture, 'getUsersPage');
                fixture.generateUsers();
                expect(getUsersPageSpy).toBeCalled();
            });
        });
    });

    describe('deleteUsers', () => {
        beforeEach(() => {
            usersServiceMock.deleteAll.mockReturnValue(of({}));
        });

        it('should call deleteAll', () => {
            fixture.deleteUsers();
            expect(usersServiceMock.deleteAll).toBeCalled();
        });

        describe('Deleted successfully', () => {
            it('should call getUsersPage', () => {
                const getUsersPageSpy = jest.spyOn(fixture, 'getUsersPage');
                fixture.deleteUsers();
                expect(getUsersPageSpy).toBeCalled();
            });
        });
    });

    describe('getUsersPage', () => {
        it('should call userService getUsersPage', () => {
            const getUsersPageSpy = jest.spyOn(usersServiceMock, 'getUsersPage');
            fixture.getUsersPage();
            expect(getUsersPageSpy).toBeCalled();
        })
    })
});