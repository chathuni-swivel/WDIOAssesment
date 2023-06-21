class PGpropertyResultPage{

get btn_sortby(){
   // return $('//span[text()="Sort by:"]')
   return $('//button[@data-testid="sorters-dropdown-trigger"]')
}

get dd_lowestprice(){
    return $('//span[text()="Price (lowest first)"]')
}

get ele_secondcardTitle(){
    return $ ('(//div[@data-testid="title"])[2]')
}

get ele_secondcardPrice(){
    return $ ('(//span[@data-testid="price-and-discounted-price"])[2]')
}

get ele_secondcardtaxes(){
    return $('(//div[@data-testid="taxes-and-charges"])[2]')
}

get ele_secondcard(){

    return $('(//div[@data-testid="property-card"])[2]')
}

get ele_availability(){
    return $('(//span[text()="See availability"])[2]')
}
}
export default new PGpropertyResultPage();