import * as Phaser from 'phaser';
import { Plugin as NineSlicePlugin } from 'phaser3-nineslice';
import SceneManager from '../managers/SceneManager';


/**
 * Get the list of scenes to add to the Phaser Game
 */
let _scenes: typeof Phaser.Scene[] = SceneManager.GetScenes();

//TODO: Let the Game World scale dynamically based on device/window size
/**
 * The width of the Phaser Game World
 */
const _gameWidth = 1080;

/**
 * The height of the Phaser Game World
 */
const _gameHeight = 1920;


/**
 * Configuration settings for the Phaser Game
 */
const phaserConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'game',
    width: _gameWidth,
    height: _gameHeight,
    roundPixels: true,

    dom: {
        createContainer: true
    },
    transparent: (true),
    fps: { target: 60 },
    backgroundColor: '#000000',
    render: {

    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },
    audio: {
        disableWebAudio: false
    },
    input: {
        activePointers: 3,
    },

    plugins: {
        global: [NineSlicePlugin.DefaultCfg],
    },
    scale: {
        parent: 'content',
        mode: Phaser.Scale.FIT, //TODO: Check if this is the correct scale mode
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: _gameWidth,
        height: _gameHeight,
    },

    scene: _scenes,

    title: 'Sample Game',
    version: '0.0.0'
};

export default phaserConfig;