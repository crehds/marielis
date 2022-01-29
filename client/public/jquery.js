var photoCount = 6;
var pieceCount = 6;
var onPhoto = 0;
var pieceCompleteCount = 0;
var delay;

var transitions = ['center', 'random'];
var transitionType = 0;

$(document).ready(function () {
  preload();
});

function preload() {
  for (var i = 0; i < photoCount; i++) {
    $('#preload').append(
      '<img src="./assets/logo_marielis_without_background.png"/>'
    );
  }
  $(window).load(function () {
    setup();
  });
}

function setup() {
  $('#photo-holder').html('');
  for (var i = 0; i < pieceCount; i++) {
    var newWidth = ((100 - (100 / pieceCount) * i) / 100) * 100; //((pieceWidth - ((pieceWidth / pieceCount) * i)) / pieceWidth) * 100;
    var newBackgroundSize = 100 + ((100 - newWidth) / newWidth) * 100; //100 + (100 - newWidth);
    var newTop = ((100 / pieceCount) * i) / 2;
    // console.log(newBackgroundSize);
    console.log(newTop);
    $('#photo-holder').append(
      '<div class="section" id="piece' +
        i +
        '" style="top: ' +
        newTop +
        '%; left: ' +
        newTop +
        '%; width: ' +
        newWidth +
        '%; height: ' +
        newWidth +
        '%; background-size:' +
        newBackgroundSize +
        '%; background-image: url("./assets/logo_marielis_without_background.png")></div>'
    );
  }
  nextSlide();
}

function nextSlide() {
  clearInterval(delay);
  pieceCompleteCount = 0;
  ++onPhoto;
  if (onPhoto >= photoCount) {
    onPhoto = 0;
  }

  for (var i = 0; i < pieceCount; i++) {
    var spinDelay = 0;
    var spin = 360;
    var piece = $('#piece' + i);

    switch (transitions[transitionType]) {
      case 'random':
        spinDelay = Math.random() / 2;
        spin = Math.random() * 360;
        break;
      case 'center':
        spinDelay = (pieceCount - i) / 10;
        spin = 181;
        break;
      default:
        break;
    }

    TweenMax.to(piece, 1, {
      delay: spinDelay,
      directionalRotation: spin + '_long',
      onComplete: completeRotation,
      onCompleteParams: [piece],
      ease: Power4.easeIn
    });
  }
}

function completeRotation(piece) {
  piece.css(
    'background-image',
    'url("./assets/logo_marielis_without_background.png")'
  );
  TweenMax.to(piece, 2, {
    directionalRotation: '0_short',
    onComplete: finishPieceanimation,
    ease: Elastic.easeOut
  });
}

function finishPieceanimation() {
  ++pieceCompleteCount;
  if (pieceCompleteCount == pieceCount) {
    delay = setInterval(nextSlide, 5000);
  }
}
