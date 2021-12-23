// JavaScript source code

//SCREEN ORIENTATION
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
//DEVICE TYPE
const DetectDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};
let DEVICE_type = DetectDeviceType();