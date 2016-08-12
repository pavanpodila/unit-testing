export default function (done) {
    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(($componentController,
                                    $controller,
                                    $compile,
                                    $httpBackend,
                                    $rootScope)=> {

        done({
            componentController: $componentController,
            controller: $controller,
            compile: $compile,
            rootScope: $rootScope,
            httpBackend: $httpBackend,
        });


    }));

};
