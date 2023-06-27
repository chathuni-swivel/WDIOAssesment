import LIB_common from "../components/LIB_common.js";
import LIB_Home from "../components/LIB_home.js";
import LIB_propertyrateResults from "../components/LIB_propertyrateResults.js";
import LIB_BookingDetail from "../components/LIB_BookingDetails.js";
import LIB_searchResult from "../components/LIB_searchResults.js";
import LIB_FinalSteps from "../components/LIB_Finalbookingstep.js";
import browserManager from "../../infrastructure/browserManager.js";
import configjs from "../../configjs.json";
import dataTC01 from "../data/dt_common/dt_TC01.json";
import dataTC02 from "../data/dt_home/dt_TC02.json";
import dataTC04 from "../data/dt_home/dt_TC04.json";


describe("Booking.com Test Suite", () => {

it("TC_01 verify user can select currency type and language and TC_02 verify user can add location details and TC_03 reserve room", async () => {

  //navigate to website

await browserManager.navigateToUrl(configjs.DefaultURL);
await browserManager.maximizeWindow();

//Click on Language icon on top panel (Set it to English (UK))
await LIB_common.bc_SelectLanguage(dataTC01.language);
//Click on Currency icon on top panel (Set it to AUD)
await LIB_common.bc_SelectCurrency(dataTC01.currency);

//Click on the “Stays” Tab on top panel
await LIB_common.bc_Clickstaysbtn();

//Type location in “Where are you going” text field.

await LIB_Home.bc_EnterLocation(dataTC02.location);

//Select the Check-in and Checkout

await LIB_Home.bc_entercheckInOutdate(dataTC02.DaysForcheckout);

//Select 1 adults and 0 children and 1 room and verify it.
await LIB_Home.bc_Addocupancy();

//verify 1 adults and 0 children and 1
await LIB_Home.bc_verifyOcupancybtn(dataTC02.occupancy);

//Click on the Search button.
await LIB_Home.bc_search();

/*startof 2nd testcase
*/

//Verify the Search Location is correct

await LIB_searchResult.bc_VerifySearchedLocation(dataTC02.location);

//Select the Property rating
await LIB_searchResult.bc_AddpropertyRate();

//Select the sort by Price in top panel in search result.

await LIB_propertyrateResults.bc_clickOnSortbtn();

//Get the name and amount with the tax of the second item from the search List page

 await LIB_propertyrateResults.bc_getNameandAmount();


 //Click the second item from the search List page and navigate to the hotel Detail page and verify the hotel name.

 await LIB_propertyrateResults.bc_NavigateToHotelDetailedPage();

  
 /*start of 3rd testcase
 */

//Select the room against the amount and tax that you store in previous page
await LIB_propertyrateResults.bc_verifyHotelPriceAndTax();


});

it("TC_04 Enter booking details",async() =>{


//Verify the checkout date, check in date and amount.

await LIB_BookingDetail.bc_VerifyCheckInCheckOutDate(dataTC02.DaysForcheckout);


// Fill all the mandatory fields in your details. First name, Last name, Email

await LIB_BookingDetail.bc_EnterBookingDetails(dataTC04.firstname,dataTC04.lastname,dataTC04.email);

//Verify your entered details are matched in final screen

await LIB_FinalSteps.bc_verifyfinalscreendetails(dataTC04.firstname,dataTC04.email);

//go to home page

await LIB_FinalSteps.bc_NavigateToHome();

// Remove the checkout hotel and verify it is not present.

await LIB_FinalSteps.bc_CloseNoticeAlert();

})




});