describe('Dashboard', ()=> {

    let $componentController,
        service,
        rootScope;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.module(($provide)=> {
        $provide.factory('loansService', ($q)=> {
            return {
                getAll() {
                    return $q((resolve)=> {
                        resolve([{id: '1'}, {id: '2'}]);
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


    beforeEach(angular.mock.inject((_$componentController_, $rootScope, loansService)=> {
        service = loansService;
        $componentController = _$componentController_;
        rootScope = $rootScope;
    }));

    it('should have an instance of loansService', ()=> {
        const ctrl = $componentController('dashboard');

        // rootScope.$digest();
        expect(ctrl.loansService).toBeDefined();
    });

    it('should request the loans', ()=> {
        spyOn(service, 'getAll').and.callThrough();
        const ctrl = $componentController('dashboard');

        expect(service.getAll).toHaveBeenCalled();
    });

    it('should store the loans', ()=> {
        const ctrl = $componentController('dashboard');
        rootScope.$digest();
        expect(ctrl.loans.length).toEqual(2);
    });

});
