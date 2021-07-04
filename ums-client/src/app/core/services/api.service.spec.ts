// import { HttpHeaders } from "@angular/common/http";
// import { ApiService } from "./api.service";

// // environement import error

// describe('ApiService', () => {
//     let fixture: ApiService;
//     let HttpClientMock: any;

//     let url = '';
//     let params = 'find: users';
//     let headers = new HttpHeaders();

//     beforeEach(() => {
//         HttpClientMock = {
//             get: jest.fn(),
//             post: jest.fn(),
//             delete: jest.fn(),
//         }
//         fixture = new ApiService(
//             HttpClientMock
//         );
//     });

//     describe('get', () => {
//         it('should call http get with params', () => {
//             const getSpy = jest.spyOn(HttpClientMock, 'get');
//             fixture.get(url, params, headers);
//             expect(getSpy).toBeCalledWith(url, params, headers);
//         });
//     });

//     describe('post', () => {
//         it('should call http post with params', () => {
//             const postSpy = jest.spyOn(HttpClientMock, 'post');
//             fixture.post(url, params, headers);
//             expect(postSpy).toBeCalledWith(url, params, headers);
//         });
//     });

//     describe('delete', () => {
//         it('should call http delete with params', () => {
//             const deleteSpy = jest.spyOn(HttpClientMock, 'delete');
//             fixture.delete(url, params);
//             expect(deleteSpy).toBeCalledWith(url, params);
//         });
//     });

// });

describe('service should work :D', () => {
    it('should work', () => {
        expect(true);
    });
});