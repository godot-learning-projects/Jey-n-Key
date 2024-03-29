// S-px
const tileSize = 16;
const height = 320;
const width = 270;
const QRCodeHeight = 300;
const QRCodeWidth = 300;
const sleepHoleSize = 50;

// Timers => seconds
const roundTime = 20;
const swalRedirectTimer = 10;
const garbageCollectorTime = 10;

const mapData = {
  minX: 0,
  maxX: width / tileSize,
  minY: 0,
  maxY: height / tileSize,
  blockedSpaces: {},
};

// Options for Player Colors... these are in the same order as our sprite sheet
const playerColors = ["blue", "red", "orange", "yellow", "green", "purple"];
const prefixName = randomFromArray(["COOL", "SUPER", "SOFT", "BUFF", "DOPE"]);

const adminRole = "HOST";
let gamesetStatus;
let players = {};
let playerColor;
let playerName;
let playerRef;
let playerId;
let seeker;
let trigger;

let allPlayersOnLobbyRef;
let allPlayersAliveRef;
let allPlayersDeadRef;
let allPlayersRef;
let gamesetRef;
let triggerRef;

let deadBodiesOnTheField = {};
let playerElements = {};
let holeElements = {};
let holes = {};

const gameContainer = document.querySelector(".game-container");
const gameScene = document.getElementById("game-scene");
const seekerElement = document.getElementById("game-seeker");
const bannerElement = document.getElementById("game-info");
const playerNameInput = document.querySelector("#player-name");
const playerColorButton = document.querySelector("#player-color");

//GAMESET_ROOMS
const GAMESET_WATCHING = "DEAD";
const GAMESET_GAMING = "ALIVE";
const GAMESET_LOBBY = "LOBBY";

// GAMESET STATUS
const GAMESET_LOADING = "LOADING";
const GAMESET_PREPARING = "CONTROL_REMOVE_FROM_HOLES";
const GAMESET_HIDE = "HIDE";
const GAMESET_SEEK = "SEEK";
const GAMESET_HUNT = "HUNT";

// MOVED TO GameSetScheduler.js
// const gamestates = [
//   GAMESET_LOADING,
//   GAMESET_PREPARING,
//   GAMESET_HIDE,
//   GAMESET_SEEK,
//   GAMESET_HUNT,
// ];

let host;
