// JavaScript source code

$(document).ready(function () {
    console.log("ready");
    ModifyHeader();
})

function ModifyHeader() {
    console.log(DEVICE_type);
    if (DEVICE_type == "mobile") {
        $("#logoText").hide();
    }
}

