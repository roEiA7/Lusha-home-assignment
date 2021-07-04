import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let fixture: TopBarComponent;
  let locationMock: any;

  beforeEach(() => {
    locationMock = {
      isCurrentPathEqualTo: jest.fn(),
    }
    fixture = new TopBarComponent(
      locationMock
    );
  });

  describe('Setup component', () => {
    describe('ngOnInit', () => {
      it('should call getActiveItem with items', () => {
        const getActiveItemSpy = jest.spyOn(fixture, 'getActiveItem');
        const items = fixture.items;
        fixture.ngOnInit();
        expect(getActiveItemSpy).toBeCalledWith(items);
      });
    });
  });

  describe('isActiveRoute', () => {
    it('should call isCurrentPathEqualTo', () => {
      const isCurrentPathEqualToSpy = jest.spyOn(locationMock, 'isCurrentPathEqualTo');
      fixture.isActiveRoute('');
      expect(isCurrentPathEqualToSpy).toBeCalled();
    });
  });

  describe('getActiveItem', () => {
    describe('menu has items', () => {
      it('should call isActiveRoute', () => {
        const isActiveRouteSpy = jest.spyOn(fixture, 'isActiveRoute');
        fixture.getActiveItem(fixture.items);
      });
    });

    describe('menu is empty', () => {
      it('should return empty object', () => {
        expect(fixture.getActiveItem([])).toEqual({});
      });
    });
  })




});