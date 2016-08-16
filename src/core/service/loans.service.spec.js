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

        httpBackend.expectGET(/loans/).respond([]);
        service.getAll();
        httpBackend.flush();
    });

    it('should request a single loan', ()=> {
        httpBackend.expectGET(/loans\/123/).respond({name: '1'});

        let result;
        service.get('123')
            .then(x=>result = x);
        httpBackend.flush();

        expect(result).toEqual({name: '1'});
    });

});
