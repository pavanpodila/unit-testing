describe('Shell', ()=> {

    let $componentController,
        $compile,
        $rootScope;

    function storeDependencies(_$componentController_, _$compile_, _$rootScope_) {
        $componentController = _$componentController_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(storeDependencies));

    it('should have the title', ()=> {
        const ctrl = $componentController('shell');

        expect(ctrl.title).toBeDefined();
    });

    it('should render the navbar', ()=>{
        const scope = $rootScope.$new();
        const element = $compile('<shell></shell>')(scope);

        // Yet another way to get the controller for a component
        const controller = element.controller('shell');

        expect(element.find('.navbar')).toBeDefined();

    });
});
