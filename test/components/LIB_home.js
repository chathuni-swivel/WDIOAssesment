
import PGhome from "../pages/PG_Booking_Home";
import datamanager from "../../infrastructure/datamanager";
import { expect } from "chai";


class home{

async bc_EnterLocation(prm_location){

await PGhome.tf_whereugoing.addValue(prm_location);
browser.pause(2000);

}

  

async bc_entercheckInOutdate(prm_checkoutdate){
    
await PGhome.btn_checkIn.click();
 browser.pause(50000);    
const currentDate =datamanager.getCurrentDate();
const formattedcurrentDate = currentDate.format("YYYY-MM-DD");
await PGhome.dtp_checkin(formattedcurrentDate).click();
browser.pause(50000);  
const checkoutDate = currentDate.add(prm_checkoutdate, "days");
const formattedDate = checkoutDate.format("YYYY-MM-DD");
await PGhome.dtp_checkout(formattedDate).click();
browser.pause(20000);  
//await webActions.type(sureveyCreate.ele_ExpirationDate, formattedDate);

}

async bc_Addocupancy(){
    //click on occupancy config bbutton
await PGhome.dd_ocupancy.click();
await PGhome.btn_Adultsminus.click();
await PGhome.btn_done.click();

}

async bc_verifyOcupancybtn(prm_occupancy){
const occupancy_count=await PGhome.dd_ocupancy.getText();
expect(occupancy_count).to.equal(prm_occupancy);
}



async bc_search(){

    await PGhome.btn_search.click();
}

    
}

export default new home();