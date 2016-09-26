describe('Loans Service', ()=> {

    let service,
        httpBackend;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(($httpBackend, loansService)=> {
        httpBackend = $httpBackend;
        service = loansService;
    }));

    afterEach(()=> {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should request the loans', ()=> {
        pending();
    });

    it('should request a single loan', ()=> {
        pending();
    });

});
