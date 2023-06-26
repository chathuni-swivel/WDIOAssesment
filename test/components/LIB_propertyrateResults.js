import { expect } from "chai";
import PGPropertyRate from "../pages/PG_Booking_PropertyRateResult";
import PGHotelDetail from "../pages/PG_Booking_HotelDetail";

let title = null;
let amount = null;
let taxes = null;


class propertyresults{


   async bc_clickOnSortbtn(){
    await PGPropertyRate.btn_sortby.click();
    browser.pause(50000); 
    await PGPropertyRate.dd_lowestprice.click();
    browser.pause(100000);
   }

   async bc_getNameandAmount(){

   await PGPropertyRate.btn_sortbylowest.waitForDisplayed({timeout:200000});
    title = await PGPropertyRate.ele_secondcardTitle.getText();
    amount = await PGPropertyRate.ele_secondcardPrice.getText();
    taxes =await PGPropertyRate.ele_secondcardtaxes.getText();
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
        await PGHotelDetail.lbl_HotelName.waitForDisplayed({ timeout: 100000 });
        const Hotelname=await PGHotelDetail.lbl_HotelName.getText();
        expect(title).to.equal(Hotelname, 'Page title does not match the expected title');

        
    }


    async bc_verifyHotelPriceAndTax(){

    // Get the text values of hotel price and tax from the page
    const hotelPrice = await PGHotelDetail.ele_hotelPrice.getText();
    const hotelTax = await PGHotelDetail.ele_taxes.getText();
    // Check if the hotel price and tax match the expected values
    if (expect(hotelPrice).to.equal(amount) && expect(hotelTax).to.equal(taxes)) {
    // Click the Reserve button
    await PGHotelDetail.ele_dropvalue.click();
    browser.pause(5000);
    await PGHotelDetail.ele_dropvalue.click();
    await PGHotelDetail.btn_reserve.click();
  }
  else {
    // Handle the case when the hotel price or tax doesn't match the expected values
    console.log("can't reserve")
  }
}


}

export default new propertyresults();