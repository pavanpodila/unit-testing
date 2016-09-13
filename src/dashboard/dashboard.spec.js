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


    describe('when "Add Loan" is invoked', () => {

        let element;

        beforeEach(() => {
            element = $compile('<dashboard></dashboard>')(rootScope.$new());

            // We have to use $ instead of angular.element for better selector lookup
            // angular.element only supports tag-lookup
            const el = document.querySelector('dashboard [data-action]');
            $(element).find('[data-action="add-loan"]').click();
        });

        it('should launch the dialog', () => {
            const controller = element.controller('dashboard');
            expect(element.find('add-loan-dialog').length).toEqual(1);
            expect(controller.dialogVisible).toEqual(true);
        });

    });

});
