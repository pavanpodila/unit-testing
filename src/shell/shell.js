class Controller {
    static $inject = ['loansService'];

    loansService = null;
    loans = [];

    constructor(loansService) {
        this.loansService = loansService;
        this.fetch();
    }

    fetch() {
        this.loansService.getAll()
            .then(data=>this.loans = data);
    }

}

export default {
    template: require('./shell.html'),
    controller: Controller,
    controllerAs: 'vm'
};
