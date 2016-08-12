class Controller {
    static $inject = ['loansService', '$route'];

    loansService = null;
    loan = null;

    constructor(loansService, $routeParams) {
        this.loansService = loansService;
        this.params = $routeParams.current.params;

        this.fetch();
    }

    fetch() {
        this.loansService.get(this.params.id)
            .then(data=>this.loan = data);
    }

}

export default {
    template: require('./template.html'),
    controller: Controller,
    controllerAs: 'vm'
};
