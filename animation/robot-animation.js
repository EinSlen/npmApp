var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 900;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
.add({
    targets: '.npm-image-one',
    translateX: 150,
    easing: "easeInExpo",
    duration: ml4.durationOut,
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    translateX: -28,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    translateX: 0,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay - 100
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  }).add({
    targets: '.npm-image-one',
    translateX: 0,
    easing: "easeInExpo"
}); 