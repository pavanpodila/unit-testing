import HomePageObject from './home';

describe('e-Portal Home', ()=> {

    let page;
    beforeEach(()=>{
        page = new HomePageObject();
        page.load();
    });

    it('should have the correct title', ()=> {
        expect(page.title()).toEqual('e-Portal');
    });

    it('should navigate to the loan detail page', ()=> {
        page.gotoFirstLoan();
        expect(browser.getCurrentUrl()).toEqual(page.loanUrl);
    });

});
