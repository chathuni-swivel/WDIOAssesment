import { expect } from "chai";
import PGBookingDetail from "../pages/PG_Booking_Details";

import datamanager from "../../infrastructure/datamanager";
//const { DateTime } = require('luxon');


class BookingDetails{


async bc_VerifyCheckInCheckOutDate(prm_daysforcheckout){

    var checkIndate = await PGBookingDetail.lbl_checkIn.getText();
    var CheckOutdate = await PGBookingDetail.lbl_checkout.getText();

const currentDate =datamanager.getCurrentDate();
const formattedcurrentDate = currentDate.format('ddd DD MMM YYYY');
browser.pause(5000);
expect(formattedcurrentDate).to.equal(checkIndate);

const checkoutDay = currentDate.add(prm_daysforcheckout, 'days');
 const formattedcheckoutDate = checkoutDay.format('ddd DD MMM YYYY');
expect(formattedcheckoutDate).to.equal(CheckOutdate);

browser.pause(2000);

}    

async bc_EnterBookingDetails(prm_firstname,prm_lastname,prm_email){
await PGBookingDetail.tf_firstName.waitForDisplayed({ timeout: 100000 });
await PGBookingDetail.tf_firstName.addValue(prm_firstname);
browser.pause(2000);
await PGBookingDetail.tf_lastName.addValue(prm_lastname);
browser.pause(2000);
await PGBookingDetail.tf_email.addValue(prm_email);
browser.pause(2000);
await PGBookingDetail.btn_finalDetail.click();

}





}
export default new BookingDetails();