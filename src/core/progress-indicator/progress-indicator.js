class Controller {
    className = 'progress-info';

    $onChanges(change) {
        if (change.value) {
            this.setProgressClass(change.value.currentValue);
        }
    }

    setProgressClass(newValue) {
        const value = typeof(newValue) === 'string'
            ? parseFloat(newValue, 10)
            : newValue;

        if (value >= 0 && value < 20) {
            this.className = 'progress-danger';
        } else if (value >= 20 && value < 40) {
            this.className = 'progress-warning';
        } else if (value >= 40 && value < 60) {
            this.className = 'progress-info';
        } else if (value >= 60) {
            this.className = 'progress-success';
        }
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
