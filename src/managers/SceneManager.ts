import * as Phaser from "phaser";
import AppConfig from "../config/appConfig";
import sceneData, { SceneType } from '../data/sceneData';

/**
 * Manages the loading, starting and removal of Phaser game scenes
 */
export default class SceneManager {

    private _debugScene: Phaser.Scenes.ScenePlugin;

    constructor() {//dataManager: any) {
        //this.dataManager = dataManager;
    }

    /**
     * @returns a list of scenes for the Phaser Config file
     */
    static GetScenes(): typeof Phaser.Scene[] {
        let scenes: typeof Phaser.Scene[] = [];

        sceneData.forEach(sceneData => {
            console.log("[SceneManager] Found scene: " + sceneData.key);
            scenes.push(sceneData.sceneTypeRef);
        });

        return scenes;
    }

    /**
     * Loads the Game Scene
     * @param scene the Phaser game scene to perform the scene loading
     */
    loadMediumGameScene(scene: Phaser.Scenes.ScenePlugin) {
        scene.start(SceneType.Medium);
        this.checkDebugScene();
    }

    /**
     * Loads the Preload Scene additively
     * @param scene the Phaser game scene to perform the scene loading
     */
    loadPreload(scene: Phaser.Scenes.ScenePlugin): void {
        scene.launch(SceneType.Preload);
    }

    /**
     * Adds a reference to the DebugScene so that we can bring it to the top everytime a new scene is created
     * @param scene 
     */
    setDebugScene(scene: Phaser.Scenes.ScenePlugin) {
        this._debugScene = scene;
    }

    /**
     * Loads the Debug Scene additively
     * @param scene the Phaser game scene to perform the scene loading
     */
    loadDebugScene(scene: Phaser.Scenes.ScenePlugin): void {

        scene.launch(SceneType.Debug);
    }

    /**
     * Checks if the debugScene exists and brings it to the top if it does
     */
    private checkDebugScene(): void {

        if (this._debugScene) {
            this._debugScene.bringToTop();
        }
    }










    loadMenuScene(scene: Phaser.Scenes.ScenePlugin) {
        scene.start(SceneType.Menu);
        this.checkDebugScene();
    }

    loadHowtoPlayScene(scene: Phaser.Scenes.ScenePlugin) {
        scene.start(SceneType.HowToPlay);
        this.checkDebugScene();
    }

    loadLevelSelectorScene(scene: Phaser.Scenes.ScenePlugin) {
        scene.start(SceneType.LevelSelector);
        this.checkDebugScene();
    }

    loadEasyScene(scene: Phaser.Scenes.ScenePlugin) {
        scene.start(SceneType.Easy);
        this.checkDebugScene();
    }

    loadHardScene(scene: Phaser.Scenes.ScenePlugin) {
        scene.start(SceneType.Hard);
        this.checkDebugScene();
    }

}
