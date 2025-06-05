const tops = [
  'images/tops/top1.png',
  'images/tops/top2.png',
  // add more
];

const bottoms = [
  'images/bottoms/bottom1.png',
  'images/bottoms/bottom2.png',
  // add more
];

const shoes = [
  'images/shoes/shoe1.png',
  'images/shoes/shoe2.png',
  // add more
];

const accessories = [
  'images/accessories/acc1.png',
  'images/accessories/acc2.png',
  // add more
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
