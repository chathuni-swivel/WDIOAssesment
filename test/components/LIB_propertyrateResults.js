import { expect } from "chai";
import PGPropertyRate from "../pages/PG_Booking_PropertyRateResult";
import PGHotelDetail from "../pages/PG_Booking_HotelDetail";
let title = null;

class propertyresults{


   async bc_clickOnSortbtn(){
    //await PGPropertyRate.btn_sortby.waitForDisplayed({timeout:10000});
    browser.pause(100000); 
    await PGPropertyRate.btn_sortby.click();
    browser.pause(50000); 
    await PGPropertyRate.dd_lowestprice.click();
    browser.pause(100000);
   }

   async bc_getNameandAmount(){

    //await PGPropertyRate.ele_secondcardTitle.waitForDisplayed({timeout:100000});
     title = await PGPropertyRate.ele_secondcardTitle.getText();
    const amount = await PGPropertyRate.ele_secondcardPrice.getText();
    const taxes =await PGPropertyRate.ele_secondcardtaxes.getText();
    browser.pause(50000); 
      
     }

    async bc_NavigateToHotelDetailedPage(){
      
        
        await PGPropertyRate.ele_availability.click();
        browser.pause(5000); 

        // Get the handles of all open tabs/windows
        const windowHandles = await browser.getWindowHandles();

        // Switch to the newly opened tab
        await browser.switchToWindow(windowHandles[1]); // Assuming the new tab is the second tab

        // Wait for the Hotel Name element to be displayed
        await PGHotelDetail.ele_HotelName.waitForDisplayed({ timeout: 100000 });
        const Hotelname=await PGHotelDetail.ele_HotelName.getText();
        expect(Hotelname).to.equal(title, 'Page title does not match the expected title');

        
    }

}

export default new propertyresults();