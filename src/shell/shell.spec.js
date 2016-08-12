import ngHelper from '../inject-angular';

describe('Shell', ()=> {

    let $componentController,
        $compile,
        $rootScope;

    ngHelper(({componentController, compile, rootScope})=>{
        $componentController = componentController;
        $compile = compile;
        $rootScope = rootScope;
    });

    it('should render the title', ()=> {
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
