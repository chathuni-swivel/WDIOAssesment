

export default {


    navigateToUrl: async function (url) {
        browser.url(url);
  },


   
   // maximize the current window
   
   maximizeWindow: async function () {
    await browser.maximizeWindow();
  },



};