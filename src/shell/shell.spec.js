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

    it('should render the title', ()=> {
        pending();
    });

    it('should render the navbar', ()=>{
        pending();
    });
});
