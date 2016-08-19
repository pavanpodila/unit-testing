import status from '../service/status';

class Controller {
    className = 'progress-info';

    $onChanges({value: {currentValue}}) {
        if (currentValue) {
            this.setProgressClass(currentValue);
        }
    }

    setProgressClass(newValue) {
        this.className = status(newValue).className;
    }
}

export default {
    bindings: {
        value: '<'
    },

    template: require('./progress-indicator.html'),
    controller: Controller,
    controllerAs: 'vm'
};
