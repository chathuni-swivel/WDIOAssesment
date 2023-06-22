class PGSearchResultPage{

    ele_Title(idf_location){
    
       return $(`//h1[contains(text(),"${idf_location}")]`)
    }

    get ele_propertyrate(){
        return $('//div[@id="filter_group_class_:R14q:"]/div[@data-filters-item="class:class=5"]/input')
       // return $('//div[@data-testid="filters-group-label-content"]//div[contains(text(),"5 stars")]')
      
    }

   

}

export default new PGSearchResultPage();