// JavaScript Source Code
// Original Author: PorkyProductions
// Language: javascript es6
// Path: js\models.js

$(document).ready(function () {
    OnStart();

})
//turns image name like books to images/books.png
function ImageNamesToFileNames(imageName) {
    return "images/" + imageName + ".png";
}
function ImageNamesArrayToFileNamesArray(imageNamesArray) {
    const fileNames = [];
    for (var i = 0; i < imageNamesArray.length; i++) {
        imageName = imageNamesArray[i];
        fileName = ImageNamesToFileNames(imageName);
        fileNames.push(fileName);
    }
    return fileNames;
}

class ImagePreview {
    constructor(ID, imageNames) {
        this.elementID = "#" + ID;
        this.files = ImageNamesArrayToFileNamesArray(imageNames)
        this.pointer = 0;
        this.length = this.files.length;

    }

    GetCurrentImage() {
        return this.files[this.pointer];
    }
    MovePointerRight() {
        this.pointer++;
        this.pointer = this.pointer % this.length;
    }

    MovePointerLeft() {
        this.pointer--;
        if (this.pointer < 0) {
            this.pointer = this.length - 1;
        }
    }
    OnSwitchRight() {
        this.MovePointerRight();
        $(this.elementID).attr("src", this.GetCurrentImage());

    }
    OnSwitchLeft() {
        this.MovePointerLeft();
        $(this.elementID).attr("src", this.GetCurrentImage());
    }
}

function OnStart(): void {
    //runs when page loads
    var HedgehogModelPreview = new ImagePreview("hedgehogModelPreview", ["HedgehogPreview_Front", "HedgehogPreview_Side", "HedgehogPreview_Top", "HedgehogPreview_Back"]);
    $("#button_HedgehogPreviewLeft").click(function () {
        HedgehogModelPreview.OnSwitchLeft();
    })
    $("#button_HedgehogPreviewRight").click(function () {
        HedgehogModelPreview.OnSwitchRight();
    })
}
