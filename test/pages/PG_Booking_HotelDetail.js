class PGHotelDetailPage{

    get lbl_HotelName(){
    
       return $('//h2[@class="d2fee87262 pp-header__title"]');
     }

    get ele_hotelPrice(){
      return $('(//span[@class="prco-valign-middle-helper"])[1]');
    }

    get ele_taxes(){
      return $('((//span[@class="prco-valign-middle-helper"])[1]/../following::div)[1]');
    }

    get dd_selectAmount(){
      return $("//select[@id='hprt_nos_select_968360803_369264466_1_0_0']");
    }

    get ele_dropvalue(){
      return $('(//option[@value="1"])[1]');

    }

    get btn_reserve(){
      return $('//span[@class="bui-button__text js-reservation-button__text"]')
    }






}
export default new PGHotelDetailPage();