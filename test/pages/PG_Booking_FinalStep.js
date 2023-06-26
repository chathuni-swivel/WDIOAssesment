class PGFinalstepPage{

get ele_Name(){
    return $('(//div[@class="bp-u-text-ellipsis bui-f-color-grayscale"])[1]');
}

get ele_Email(){
    return $('(//div[@class="bp-u-text-ellipsis bui-f-color-grayscale"])[2]')
}

}
export default new PGFinalstepPage();