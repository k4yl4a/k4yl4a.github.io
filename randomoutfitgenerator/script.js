const tops = [
  'images/tops/top1.png',
  'images/tops/top2.png',
  'images/tops/top3.png',
  'images/tops/top4.png',
  'images/tops/top5.png',
  'images/tops/top6.png',
  'images/tops/top7.png',
  'images/tops/top8.png',
  'images/tops/top9.png',
  'images/tops/top10.png',
  'images/tops/top11.png',
  'images/tops/top12.png',
  'images/tops/top13.png',
  'images/tops/top14.png',
  'images/tops/top15.png',
  'images/tops/top16.png',
  'images/tops/top17.png',
  'images/tops/top18.png',
  'images/tops/top19.png',
  'images/tops/top20.png',
  'images/tops/top21.png',
  'images/tops/top22.png',
  'images/tops/top23.png',
  'images/tops/top24.png',
  'images/tops/top25.png',
  'images/tops/top26.png',
  'images/tops/top27.png',
];

const bottoms = [
  'images/bottoms/bottom1.png',
  'images/bottoms/bottom2.png',
  'images/bottoms/bottom3.png',
  'images/bottoms/bottom4.png',
  'images/bottoms/bottom5.png',
  'images/bottoms/bottom6.png',
  'images/bottoms/bottom7.png',
];

const shoes = [
  'images/shoes/shoe1.png',
  'images/shoes/shoe2.png',
];

const accessories = [
  'images/accessories/acc1.png',
  'images/accessories/acc2.png',
];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateOutfit() {
  document.getElementById('top-img').src = getRandomItem(tops);
  document.getElementById('bottom-img').src = getRandomItem(bottoms);
  document.getElementById('shoe-img').src = getRandomItem(shoes);
  document.getElementById('acc-img').src = getRandomItem(accessories);
}
