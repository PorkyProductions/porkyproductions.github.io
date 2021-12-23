// JavaScript source code
let ORIENTATION_isLandscape = true;

$(document).ready(function () {
    DetectScreenOrientation();
})
jQuery(window).on("orientationchange", function (event) {
    //When screen orientation changes
    DetectScreenOrientation();

});
function DetectScreenOrientation() {

    //detects orientation of device
    ORIENTATION_isLandscape = (window.innerHeight <= window.innerWidth);
    return ORIENTATION_isLandscape;
}