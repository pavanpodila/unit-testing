describe('Session Service', ()=> {

    let service,
        rootScope,
        timeout;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject((sessionService, $rootScope, $timeout)=> {
        service = sessionService;
        rootScope = $rootScope;
        timeout = $timeout;
    }));


    it('should return a valid session', ()=> {
        let result;

        service.valid()
            .then(x=> result = x);

        rootScope.$digest();
        expect(result).toEqual({valid: true});

    });

    it('should be alive', ()=> {
        let result;

        service.alive()
            .then(x=>result = x);

        timeout.flush(501);

        expect(result).toEqual(true);
    });

});

