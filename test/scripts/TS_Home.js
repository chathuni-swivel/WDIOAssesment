import LIB_common from "../components/LIB_common.js";
import LIB_Home from "../components/LIB_home.js";
import LIB_propertyrateResults from "../components/LIB_propertyrateResults.js";
import LIB_searchResult from "../components/LIB_searchResults.js";
import dataTC01 from "../data/dt_common/dt_TC01.json";
import dataTC02 from "../data/dt_home/dt_TC02.json"


describe("Booking.com Test Suite", () => {

it("TC1 verify user can select currency type and language and TC2 verify user can add location details", async () => {

  //navigate to website
await LIB_common.bc_NavigateToURL();

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

//Click on the Search button.
await LIB_Home.bc_search();

//Verify the Search Location is correct

await LIB_searchResult.bc_VerifySearchedLocation(dataTC02.location);

//Select the Property rating
//await LIB_searchResult.bc_AddpropertyRate();

//Select the sort by Price in top panel in search result.

await LIB_propertyrateResults.bc_clickOnSortbtn();

//Get the name and amount with the tax of the second item from the search List page

 await LIB_propertyrateResults.bc_getNameandAmount();

 await LIB_propertyrateResults.bc_NavigateToHotelDetailedPage();

});




});