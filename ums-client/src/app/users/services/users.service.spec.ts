import { of, throwError } from 'rxjs';
import { UsersService } from './users.service';

describe('TopBarComponent', () => {
    let fixture: UsersService;
    let apiMock: any;
    let messaginServiceMock: any;

    beforeEach(() => {
        messaginServiceMock = {
            add: jest.fn()
        };
        apiMock = {
            get: jest.fn(),
            post: jest.fn(),
            delete: jest.fn()
        };
        fixture = new UsersService(
            apiMock,
            messaginServiceMock
        );
    });

    describe('getUsersPage', () => {
        const page = 1;
        const limit = 15;
        describe('get Succeed', () => {
            it('should call api get', () => {
                const getSpy = jest.spyOn(apiMock, 'get');
                apiMock.get.mockReturnValue(of({}));
                fixture.getUsersPage(page, limit);
                expect(getSpy).toBeCalled();
            });
        });

        // // messagingService spy doesnt work
        // describe('get failed', () => {
        //     it('should call messageService add', () => {
        //         const addSpy = jest.spyOn(messaginServiceMock, 'add');
        //         apiMock.get.mockReturnValue(throwError({ error: 'err' }));
        //         fixture.getUsersPage(page, limit);
        //         expect(addSpy).toBeCalled();
        //     });
        // });

    });

    describe('add', () => {
        const user = { _id: 'i', firstName: 'a', lastName: 'b', password: 'a', email: 'a', description: 'a' };
        describe('add Succeed', () => {
            it('should call api post', () => {
                const getSpy = jest.spyOn(apiMock, 'post');
                apiMock.post.mockReturnValue(of({}));
                fixture.add(user);
                expect(getSpy).toBeCalled();
            });
        });

        // describe('add failed', () => {
        //     it('should call messageService add', () => {
        //         const addSpy = jest.spyOn(messaginServiceMock, 'add');
        //         apiMock.post.mockReturnValue(throwError({ error: 'err' }));
        //         fixture.add(user);
        //         expect(addSpy).toBeCalled();
        //     });
        // });

    });

    describe('generate', () => {
        describe('add Succeed', () => {
            it('should call api post', () => {
                const getSpy = jest.spyOn(apiMock, 'post');
                apiMock.post.mockReturnValue(of({}));
                fixture.generate();
                expect(getSpy).toBeCalled();
            });

            // it('should call messageService add', () => {
            //     const addSpy = jest.spyOn(messaginServiceMock, 'add');
            //     apiMock.post.mockReturnValue(throwError({ error: 'err' }));
            //     fixture.generate();
            //     expect(addSpy).toBeCalled();
            // });
        });

        // describe('generate failed', () => {
        //     it('should call messageService add', () => {
        //         apiMock.post.mockReturnValue(throwError({ error: 'err' }));
        //         fixture.generate();
        //         expect(addSpy).toBeCalled();
        //     });
        // });

    });

    describe('deleteAll', () => {
        describe('delete Succeed', () => {
            it('should call api delete', () => {
                const getSpy = jest.spyOn(apiMock, 'delete');
                apiMock.delete.mockReturnValue(of({}));
                fixture.deleteAll();
                expect(getSpy).toBeCalled();
            });
        });

        // describe('delete failed', () => {
        //     it('should call messageService add', () => {
        //         const addSpy = jest.spyOn(messaginServiceMock, 'add');
        //         apiMock.delete.mockReturnValue(throwError({ error: 'err' }));
        //         fixture.deleteAll();
        //         expect(addSpy).toBeCalled();
        //     });
        // });

    });




});

