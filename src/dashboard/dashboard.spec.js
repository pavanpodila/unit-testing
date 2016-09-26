describe('Dashboard', ()=> {

    let $componentController,
        service,
        rootScope,
        $compile;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.module(($provide)=> {
        $provide.factory('loansService', ($q)=> {
            return {
                getAll() {
                    return $q((resolve)=> {
                        resolve([{id: '1', created: new Date()}, {id: '2', created: new Date()}]);

                    });
                },

                get(id) {
                    return $q((resolve)=> {
                        resolve({id: '1'});
                    });
                }
            };
        });
    }));


    beforeEach(angular.mock.inject((_$componentController_, $rootScope, loansService, _$compile_)=> {
        service = loansService;
        $componentController = _$componentController_;
        rootScope = $rootScope;
        $compile = _$compile_;
    }));

    it('should have an instance of loansService', ()=> {
        pending();
    });

    it('should request the loans', ()=> {
        pending();
    });

    it('should store the loans', ()=> {
        pending();
    });


    describe('when "Add Loan" is invoked', () => {

        let element;

        beforeEach(() => {
        });

        it('should launch the dialog', () => {
            pending();
        });

    });

});
