import { Sound } from 'phaser';
import soundData from '../data/soundData';

/**
 * Loads and manages the sound of the game
 */
export default class SoundManager {

    /**
     * Stores all of the loaded sounds
     */
    private _soundDictionary: {};

    /**
     * A boolean that stores whether the sound is muted or not
     */
    private _isActive: boolean;

    constructor() {
        this._soundDictionary = {};
        this._isActive = true;
    }

    /**
     * Performs the loading of audio assets
     * @param phaserLoader The Phaser Loader object to perform the preloading of sounds
     */
    preload(phaserLoader: Phaser.Loader.LoaderPlugin): void{

        Object.keys(soundData).forEach(item => {
            //console.log("[Sound Manager] Adding sound: " + item);
            phaserLoader.audio(soundData[item].key, [soundData[item].src]);
        });

    }

    /**
     * Creates the sound objects that Phaser uses to play
     * @param phaserSoundManager 
     */
    init(phaserSoundManager: Sound.NoAudioSoundManager | Sound.HTML5AudioSoundManager | Sound.WebAudioSoundManager) {

        Object.keys(soundData).forEach(item => {
            //console.log("[Sound Manager] Creating sound: " + item);
            this._soundDictionary[soundData[item].key] = phaserSoundManager.add(soundData[item].key, {
                volume: soundData[item].volume,
                loop: soundData[item].loop,
            });
        });

        console.log('[Sound Manager] Started');
    }

    /**
    * Play the sound corresponding to the data object's key
    */
    play(data) {
        this._soundDictionary[data.key].play();
    }

    isPlaying(data): boolean{
        return this._soundDictionary[data.key].isPlaying;
    }

    resume(data) {
        this._soundDictionary[data.key].resume();
    }

    pause(data) {
        this._soundDictionary[data.key].pause();
    }

    stop(data) {
        this._soundDictionary[data.key].stop();
    }

    stopAll() {
        Object.keys(soundData).forEach(item => {
            this._soundDictionary[soundData[item].key].stop();
        });
    }

    /**
     * Checks if the audio is muted or not
     */
    get audioEnabled() {
        return this._isActive;
    }

    /**
     * Mute and Unmute the sounds
     */
    toggleAudio() {
        Object.keys(soundData).forEach(item => {
            this._soundDictionary[soundData[item].key].setMute(this._isActive);
        });

        this._isActive = !this._isActive;
    }
}