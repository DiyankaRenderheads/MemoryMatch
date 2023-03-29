import * as Phaser from 'phaser';

import AppConfig from './config/appConfig';
import phaserConfig from './config/phaserConfig';
import SceneManager from './managers/SceneManager';
import FontLoader from './managers/FontLoader';
import SoundManager from './managers/SoundManager';
import ImageManager from './managers/ImageManager';

//How to use the Environment variables
const serverURL = process.env.SERVER_URL;
const mode = process.env.MODE;

/**
 *  Load the font before starting the game (as the font is used on the loading screen)
 */
function loadFonts() {
  //create the fontloader to load fonts
  const fontLoader = new FontLoader(setupGame);
}

loadFonts();

function setupGame() {

  console.log("[main.ts] starting setup");

  const game = new Phaser.Game(phaserConfig);

  //Setup Manager classes
  AppConfig.SceneManager = new SceneManager();
  AppConfig.SoundManager = new SoundManager();
  AppConfig.ImageManager = new ImageManager();

  //Setup variables
  AppConfig.WIDTH = Number(phaserConfig.scale.width);
  AppConfig.HEIGHT = Number(phaserConfig.scale.height);
  AppConfig.CENTER_WIDTH = Number(phaserConfig.scale.width as number / 2);
  AppConfig.CENTER_HEIGHT = Number(phaserConfig.scale.height as number / 2);
}