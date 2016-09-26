class Controller {
    static $inject = ['$element'];

    loan = {
        name: '',
        amount: 0
    };

    constructor($element) {
        this.element = $element;
    }

    $onInit() {
        this.modalInstance = $(this.element).find('.modal').modal({
            backdrop: 'static'
        });
    }

    $onDestroy() {
        if (this.modalInstance) {
            this.modalInstance.modal('hide');
        }
    }

    cancel() {
        this.onClose(null);
    }

    save() {

        // http://stackoverflow.com/a/18974032
        this.onClose({loan: this.loan});
    }
}

export default {
    bindings: {
        onClose: '&'
    },
    template: require("./add-loan-dialog.html"),
    controller: Controller,
    controllerAs: 'vm'
};