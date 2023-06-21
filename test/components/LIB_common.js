
import PGcommon from "../pages/PG_Booking_Common"

class common{

    async bc_SelectLanguage(prm_language){
        expect(PGcommon.btn_languagetype).toBePresent()
        await PGcommon.btn_languagetype.click();
        browser.pause(2000);
        if (PGcommon.btn_signinAlert.isDisplayed()) {
            PGcommon.btn_signinAlert.click();
          }
    
        browser.pause(50000);
        await PGcommon.ele_languageitem(prm_language).click();
        // browser.pause(50000)

    }

    async bc_SelectCurrency(prm_currency){
        expect(PGcommon.btn_currencyType).toBePresent()
        
        await PGcommon.btn_currencyType.click();
        browser.pause(50000);
        await PGcommon.ele_currencyitem(prm_currency).click();
        browser.pause(50000)


    }

async bc_Clickstaysbtn(){
 
    await PGcommon.ele_stays.click();
}



}

export default new common();