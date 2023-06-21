

export default {


    navigateToUrl: async function (url) {
        browser.url(url);
  },


   
   // maximize the current window
   
   maximizeWindow: async function () {
    await browser.maximizeWindow();
  },


   
   //close the current window
   
   closeWindow: async function () {
    await browser.closeWindow();
  },


   
   //minimize the current window
 
   minimizeWindow: async function () {
    await browser.minimizeWindow();
  },

  
  
   // refresh the current window
   
  refreshWindow: async function () {
    await browser.refresh();
  },


};