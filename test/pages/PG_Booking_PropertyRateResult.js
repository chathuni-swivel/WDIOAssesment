class PGpropertyResultPage{

get btn_sortby(){
 
   return $('//button[@data-testid="sorters-dropdown-trigger"]')

}

get dd_lowestprice(){
    return $('//span[text()="Price (lowest first)"]')
}

get btn_sortbylowest(){
    return $('//button[@data-selected-sorter="price"]')
}

get ele_secondcardTitle(){
    
    return $ ('(//button[@data-selected-sorter="price"]/following::div[@data-testid="title"])[2]')
}

get ele_secondcardPrice(){
   
    return $ ('(//button[@data-selected-sorter="price"]/following::span[@data-testid="price-and-discounted-price"])[2]')
}

get ele_secondcardtaxes(){

   return $('(//button[@data-selected-sorter="price"]/following::div[@data-testid="taxes-and-charges"])[2]')

}

get ele_secondcard(){

    return $('(//div[@data-testid="property-card"])[2]')
}

get ele_availability(){
    return $('(//span[text()="See availability"])[2]')
}
}
export default new PGpropertyResultPage();