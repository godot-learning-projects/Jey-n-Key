//Misc Helpers
function nextGameset(gameset) {
  let index = gamestates.indexOf(gameset);
  return gamestates[index + 1] || gamestates[0];
}

var urlParam = function (name, w) {
  w = w || window;
  var rx = new RegExp("[&|?]" + name + "=([^&#]+)"),
    val = w.location.search.match(rx);
  return !val ? "" : val[1];
};

function setUrlParams(appendParams) {
  var params = isDefined(window.location.search)
    ? `${window.location.search}&`
    : "?";
  var newurl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    params +
    `${appendParams}`;

  window.history.pushState({ path: newurl }, "", newurl);
}

function isDefined(param) {
  return !(
    param == "" ||
    param == "null" ||
    param == "undefined" ||
    param == null ||
    param == undefined
  );
}

function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function countPlayers(players) {
  return Object.keys(players).length;
}

function getRandomPlayer(players) {
  let keys = Object.keys(players);
  let random = Math.floor(Math.random() * keys.length);
  return players[keys[random]];
}

function getKeyString(x, y) {
  return `${x}x${y}`;
}

function createName() {
  return `${prefixName} MOLE`;
}

function isSolid(x, y) {
  const blockedNextSpace = mapData.blockedSpaces[getKeyString(x, y)];
  return (
    blockedNextSpace ||
    x >= mapData.maxX ||
    x < mapData.minX ||
    y >= mapData.maxY ||
    y < mapData.minY
  );
}

function getRandomSpot() {
  let x = randomIntFromInterval(mapData.minX, mapData.maxX - 1);
  let y = randomIntFromInterval(mapData.minY, mapData.maxY - 1);

  return { x, y };
}

function getRandomSafeSpot() {
  //We don't look things up by key here, so just return an x/y
  return randomFromArray([
    { x: 1, y: 4 },
    { x: 2, y: 4 },
    { x: 1, y: 5 },
    { x: 2, y: 6 },
    { x: 2, y: 8 },
    { x: 2, y: 9 },
    { x: 4, y: 8 },
    { x: 5, y: 5 },
    { x: 5, y: 8 },
    { x: 5, y: 10 },
    { x: 5, y: 11 },
    { x: 11, y: 7 },
    { x: 12, y: 7 },
    { x: 13, y: 7 },
    { x: 13, y: 6 },
    { x: 13, y: 8 },
    { x: 7, y: 6 },
    { x: 7, y: 7 },
    { x: 7, y: 8 },
    { x: 8, y: 8 },
    { x: 10, y: 8 },
    { x: 8, y: 8 },
    { x: 11, y: 4 },
  ]);
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
