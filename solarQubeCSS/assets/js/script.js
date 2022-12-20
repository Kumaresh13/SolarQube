var images = ['./solarQubeCSS/PoV2.png', './solarQubeCSS/PoV3.png', './solarQubeCSS/PoV4.png', './solarQubeCSS/PoV1.png'];

var index = 0;

function change() {
  document.getElementById('PoV').src = images[index];
  if (index == 3) {
    index = 0;
  } else {
    index++;
  }
}
setInterval(change, 4000);


var images = ['./solarQubeCSS/Ph_Img2.png', './solarQubeCSS/Ph_Img3.png', './solarQubeCSS/Ph_Img4.png', './solarQubeCSS/Ph_Img5.png', './solarQubeCSS/Ph_Img6.png', './solarQubeCSS/Ph_Img1.png'];

var index = 0;

function change() {
  document.getElementById('PhImages').src = images[index];
  if (index == 5) {
    index = 0;
  } else {
    index++;
  }
}
setInterval(change, 4000);