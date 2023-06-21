class PGHomePage{

get tf_whereugoing(){
    return $("//input[@placeholder='Where are you going?']")
}

get btn_checkIn(){
    return $('//button[@data-testid="date-display-field-start"]')
}

get btn_checkout(){
    return $('//button[@data-testid="date-display-field-end"]')
}

dtp_checkin(idf_checkIndate){
    return $(`//span[@data-date="${idf_checkIndate}"]`)
   
}


 dtp_checkout(idf_checkoutdate){
    return $(`//span[@data-date="${idf_checkoutdate}"]`)
  
}

get btn_search(){
    return $('//button[@type="submit"]')
}

get dd_ocupancy(){
    return $('//button[@data-testid="occupancy-config"]')
}


get btn_Adultsminus(){
return $('(//button[@tabindex="-1"])[1]')
}

get ele_childrenCount(){
return $('(//span[@class="e615eb5e43"])[2]')
}

get ele_roomcount(){
    return $('(//span[@class="e615eb5e43"])[3]')
}

get btn_done(){
    return $('//span[text()="Done"]')
}
}
export default new PGHomePage();