import PGfinalstep from "../pages/PG_Booking_FinalStep";
import PGCommon from "../pages/PG_Booking_Common";
import PGHome from "../pages/PG_Booking_Home";
import { expect } from "chai";


class finalBookingDetailpage{

    async bc_verifyfinalscreendetails(prm_name,prm_email){
        await PGfinalstep.ele_Name.waitForDisplayed({ timeout: 100000 });

        const finalScreenName= await PGfinalstep.ele_Name.getText();
        const finalScreenEmail= await PGfinalstep.ele_Email.getText();
    
        expect(finalScreenName).to.include(prm_name);
        expect(finalScreenEmail).to.include(prm_email);
    
    }

    async bc_NavigateToHome(){
        await PGCommon.ele_siteLogo.click();
    }

    async bc_CloseNoticeAlert(){
        await PGHome.ele_noticeAlert.waitForDisplayed({ timeout: 100000 });
        await PGHome.btn_closeNotice.click();
        const isNoticeAlertDisplayed = await PGHome.ele_noticeAlert.isDisplayed();
        browser.pause(5000);
        expect(isNoticeAlertDisplayed).to.be.false;
    }
}

export default new finalBookingDetailpage();