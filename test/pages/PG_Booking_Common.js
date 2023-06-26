class PGCommonPage{

get btn_languagetype() {
        return $('//button[@data-testid="header-language-picker-trigger"]');
      }

ele_languageitem(idf_language){
        return $(`//span[text()='${idf_language}']`)
    }  

get btn_currencyType() {
        return $('//button[@data-testid="header-currency-picker-trigger"]');
      }  
      
ele_currencyitem(idf_currency){
        return $(`//span[text()='${idf_currency}']`)
    }  
get ele_stays(){
    return $("//a[@id='accommodations']");
}    

get btn_signinAlert(){
    return $('//button[@aria-label="Dismiss sign-in info."]')
}

get ele_siteLogo(){
    return $('//div[@class="bui-header__logo"]')
}


}
export default new PGCommonPage();