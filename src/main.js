import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app

function AnimateTile() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.tile-preAnimate');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    init();
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0 && positionFromTop != 0) {
        element.classList.remove('tile-preAnimate');

        element.classList.add('tile');
        

      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
};
(function() {
  AnimateTile();

})();