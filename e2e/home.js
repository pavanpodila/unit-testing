export default class HomePageObject {

    loanUrl = null;

    load() {
        browser.get('http://localhost:8080');
    }

    title() {
        return $('.navbar-brand').getText();
    }

    gotoFirstLoan() {
        const viewBtn = $('.card:first-child .card-link');

        this.loanUrl = viewBtn.getAttribute('href');
        viewBtn.click();
    }
}