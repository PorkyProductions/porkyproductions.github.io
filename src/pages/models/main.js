import '../../app.css'
import App from './App.svelte'
// @ts-ignore
import { onMount } from 'svelte';

const app = new App({
  target: document.getElementById('app')
})
export default app
// JavaScript Source Code
// Original Author: PorkyProductions
// Language: javascript es6
// Path: js\models.js
//turns image name like books to images/books.png
function ImageNamesToFileNames(imageName) {
  return "images/" + imageName + ".png";
}
function ImageNamesArrayToFileNamesArray(imageNamesArray) {
  var fileNames = [];
  for (var i = 0; i < imageNamesArray.length; i++) {
      var imageName = imageNamesArray[i];
      var fileName = ImageNamesToFileNames(imageName);
      fileNames.push(fileName);
  }
  return fileNames;
}

class ImagePreview {
  constructor(ID, imageNames) {
      this.elementID = ID;
      this.files = ImageNamesArrayToFileNamesArray(imageNames);
      this.pointer = 0;
      this.length = this.files.length;
  }
  GetCurrentImage = function () {
      return this.files[this.pointer];
  };
  MovePointerRight = function () {
      // @ts-ignore
      this.pointer++;
      // @ts-ignore
      this.pointer = this.pointer % this.length;
      console.log(this.pointer);

  };
  MovePointerLeft = function () {
      // @ts-ignore
      this.pointer--;
      // @ts-ignore
      if (this.pointer < 0) {
          // @ts-ignore
          this.pointer = this.length - 1;
      }
  };
  OnSwitchRight = function () {
      this.MovePointerRight();
      var img = document.getElementById(this.elementID);
      // @ts-ignore
      img.src = this.GetCurrentImage();
      
  };
  OnSwitchLeft = function () {
      this.MovePointerLeft();
      var img = document.getElementById(this.elementID);
      // @ts-ignore
      img.src = this.GetCurrentImage();
    };
};
function OnStart() {
  //runs when page loads
  var HedgehogModelPreview = new ImagePreview("hedgehogModelPreview", ["HedgehogPreview_Front", "HedgehogPreview_Side", "HedgehogPreview_Top", "HedgehogPreview_Back"]);
  InitiateModelTile("hedgehog", HedgehogModelPreview);
  var BowModelPreview = new ImagePreview("bowModelPreview", ["BowPreview_Top", "BowPreview_Front", "BowPreview_Bottom", "BowPreview_Back"]);
  InitiateModelTile("bow", BowModelPreview);
}
function InitiateModelTile(name, imagePreview){
    document.getElementById("button_" + name + "ModelPreviewLeft").onclick = (function () {
      imagePreview.OnSwitchLeft();
  });
  document.getElementById("button_" + name + "ModelPreviewRight").onclick = (function () {
      imagePreview.OnSwitchRight();
  });
  document.getElementById("button_" + name + "ModelPreviewView").onclick = (function () {
      var viewer = document.getElementById(name + "ModelPreviewViewer");

      //change display to coorect
      var newDisplay = "none";      
      if(viewer.style.display == "none"){ newDisplay= ""; }
      viewer.style.display = newDisplay;

      //refreshes the object
      var viewerInner = viewer.innerHTML;
      viewer.innerHTML = viewerInner;
  });
}
document.addEventListener('DOMContentLoaded', function () {
  // do something here ...
  OnStart();

}, false);

