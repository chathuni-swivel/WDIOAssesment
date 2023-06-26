class PGBookingDetailPage{
    
get lbl_checkIn(){
return $('(//time[@class="bui-date bui-date--large"]//span)[1]')
}
get lbl_checkout(){
return $('(//time[@aria-describedby="bp-checkout-date__label"]//span)[1]')
}    

get tf_firstName(){

    return $('//input[@id="firstname"]');
}

get tf_lastName(){

    return $('//input[@id="lastname"]');
}

get tf_email(){
    return $('//input[@id="email"]');
}

get btn_finalDetail(){
    return $('//button[@name="book"]')
}

}

export default new PGBookingDetailPage();