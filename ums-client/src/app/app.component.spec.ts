import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
    let fixture: AppComponent;

    beforeEach(() => {
        fixture = new AppComponent()
    });

    describe('Setup component', () => {
        it('should be titled ums', () => {
            const titleMock = 'ums';
            expect(fixture.title).toEqual(titleMock);
        })
    })

});

