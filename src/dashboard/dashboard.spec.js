import ngHelper from '../inject-angular';

describe('Dashboard', ()=> {

    let $componentController,
        $httpBackend;

    ngHelper(({componentController, httpBackend})=> {
        $componentController = componentController;
        $httpBackend = httpBackend;
    });

    it('should have an instance of loansService', ()=> {
        const ctrl = $componentController('dashboard');

        expect(ctrl.loansService).toBeDefined();
    });

    describe('http calls', ()=> {
        afterEach(()=> {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should request the loans', ()=> {

            $httpBackend.expectGET(/loans/).respond([]);
            const ctrl = $componentController('dashboard');

            $httpBackend.flush();
        });

        it('should store the loans', ()=> {
            $httpBackend.expectGET(/loans/).respond([
                {name: '1'}, {name: '2'}
            ]);
            const ctrl = $componentController('dashboard');
            $httpBackend.flush();

            expect(ctrl.loans.length).toEqual(2);
        });
    });

});
