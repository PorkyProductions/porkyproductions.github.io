import '../../app.css'
import App from './App.svelte'
import { onMount } from 'svelte';

const app = new App({
  target: document.getElementById('app')
})

// export default app
// // JavaScript Source Code
// // Original Author: PorkyProductions
// // Language: javascript es6
// // Path: js\models.js
// $(document).ready(function () {
//   OnStart();
// });
// //turns image name like books to images/books.png
// function ImageNamesToFileNames(imageName) {
//   return "images/" + imageName + ".png";
// }
// function ImageNamesArrayToFileNamesArray(imageNamesArray) {
//   var fileNames = [];
//   for (var i = 0; i < imageNamesArray.length; i++) {
//       var imageName = imageNamesArray[i];
//       var fileName = ImageNamesToFileNames(imageName);
//       fileNames.push(fileName);
//   }
//   return fileNames;
// }
// var ImagePreview = /** @class */ (function () {
//   function ImagePreview(ID, imageNames) {
//       this.elementID = "#" + ID;
//       this.files = ImageNamesArrayToFileNamesArray(imageNames);
//       this.pointer = 0;
//       this.length = this.files.length;
//   }
//   ImagePreview.prototype.GetCurrentImage = function () {
//       return this.files[this.pointer];
//   };
//   ImagePreview.prototype.MovePointerRight = function () {
//       this.pointer++;
//       this.pointer = this.pointer % this.length;
//   };
//   ImagePreview.prototype.MovePointerLeft = function () {
//       this.pointer--;
//       if (this.pointer < 0) {
//           this.pointer = this.length - 1;
//       }
//   };
//   ImagePreview.prototype.OnSwitchRight = function () {
//       this.MovePointerRight();
//       $(this.elementID).attr("src", this.GetCurrentImage());
//   };
//   ImagePreview.prototype.OnSwitchLeft = function () {
//       this.MovePointerLeft();
//       $(this.elementID).attr("src", this.GetCurrentImage());
//   };
//   return ImagePreview;
// }());
// function OnStart() {
//   //runs when page loads
//   var HedgehogModelPreview = new ImagePreview("hedgehogModelPreview", ["HedgehogPreview_Front", "HedgehogPreview_Side", "HedgehogPreview_Top", "HedgehogPreview_Back"]);
//   $("#button_HedgehogPreviewLeft").click(function () {
//       HedgehogModelPreview.OnSwitchLeft();
//   });
//   $("#button_HedgehogPreviewRight").click(function () {
//       HedgehogModelPreview.OnSwitchRight();
//   });
// }

