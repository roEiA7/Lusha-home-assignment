import { HttpRequest, HttpResponse } from "@angular/common/http";
import { CacheService } from "./cache.service";

describe('CacheService', () => {
    let fixture: CacheService;
    let cachRequestMock: any;
    let cacheResponseMock: any;

    beforeEach(() => {
        fixture = new CacheService();
    });

    describe('get', () => {
        cachRequestMock = new HttpRequest('GET', 'cached');
        cacheResponseMock = new HttpResponse<any>();

        describe('request cached', () => {
            it('should return cache', () => {
                fixture.put(cachRequestMock, cacheResponseMock);
                const cachResponse = fixture.get(cachRequestMock);
                expect(cachResponse).toBe(cacheResponseMock);
            });
        });

        describe('request isnt cached', () => {
            it('should return undefined', () => {
                const cachResponse = fixture.get(cachRequestMock);
                expect(cachResponse).toBe(undefined);

            });
        });
    });
});