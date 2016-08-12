import './shell.scss';

class Controller {
    static $inject = ['env'];

    constructor(env) {
        this.title = env.title;
    }
}

export default {
    template: require('./shell.html'),
    controller: Controller,
    controllerAs: 'vm'
};
