import PGSearchResult from "../pages/PG_Booking_SearchResult.js";
const { expect } = require('chai');


class searchResults{

async bc_VerifySearchedLocation(prm_location){
var location =  await PGSearchResult.ele_Title(prm_location).getText();
expect(location).to.include(prm_location);

}
  
  async bc_AddpropertyRate() {
    await PGSearchResult.ele_propertyrate.click();
    browser.pause(200000);
  
    
  }



}
export default new searchResults();