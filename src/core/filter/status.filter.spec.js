describe('Status Filter', ()=> {

    let filter;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(($filter)=>{
        filter = $filter('status');
    }));

    it('should give back a status', ()=> {
        const result = filter('20');
        expect(result).toBeTruthy();
    });

});
