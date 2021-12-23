// JavaScript source code

$(document).ready(function () {
    ModifyHeader();
})
jQuery(window).on("orientationchange", function (event) {
    //When screen orientation changes
    ModifyHeader();

});
function ModifyHeader() {
    if (ORIENTATION_isLandscape) {
        //if current screen orientation is horizontal / landscape
        $('logoText').show();
    } else {
        //portrait
        $('logoText').hide();

    }
}