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
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Firefox|Firefox M(obi|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};
let DEVICE_type = DetectDeviceType();


// IF the device is a mobile device or a tablet device, hide the "#logoText" element
if (DEVICE_type == "mobile") {
    $("#logoText").hide();
}
