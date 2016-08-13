class Controller {
    static $inject = ['loansService'];

    loansService = null;
    loans = [];
    dialogVisible = false;

    constructor(loansService) {
        this.loansService = loansService;
        this.fetch();
    }

    fetch() {
        return this.loansService.getAll()
            .then(data=> {
                this.loans = data
                    .map(x=>{
                        x.created = new Date(x.created);
                        return x;
                    })
                    .sort((a, b)=>a.created - b.created);
            });
    }

    launchAddLoanDialog() {
        this.dialogVisible = true;
    }

    onDialogClosed(loan) {
        if (!loan) {
            this.dialogVisible = false;
            return;
        }

        this.loansService.addLoan(loan)
            .then(()=> {
                return this.fetch();
            })
            .then(()=> {
                this.dialogVisible = false;
            });
    }
}

export default {
    template: require('./dashboard.html'),
    controller: Controller,
    controllerAs: 'vm'
};
