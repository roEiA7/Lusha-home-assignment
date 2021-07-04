import { ViewContainerRef } from '@angular/core';
import { MyLetDirective } from './my-let.directive';



describe('MyLetDirective', () => {
    let viewContainerMock: any;
    let templateRef: any;

    describe('Setup directive', () => {
        viewContainerMock = {
            createEmbeddedView: jest.fn()
        }
        it('should create an instance', () => {
            const directive = new MyLetDirective<any>(viewContainerMock, templateRef);
            expect(directive).toBeTruthy();
        });
    });

});


