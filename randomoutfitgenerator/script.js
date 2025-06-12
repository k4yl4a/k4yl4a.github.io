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
];

const bottoms = [
  'images/bottoms/bottom1.png',
  'images/bottoms/bottom2.png',
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
