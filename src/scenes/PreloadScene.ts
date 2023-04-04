import * as Phaser from "phaser";
import { SceneType } from "../data/sceneData";
import { BaseScene } from "./BaseScene";
import AppConfig from "../config/appConfig";

/**
 * Loads the asset files using the managers
 * Also performs some initialisation
 */
export class PreloadScene extends BaseScene {

    constructor() {
        super(SceneType.Preload, false);
    }

    preload(): void {
        super.preload();

        AppConfig.ImageManager.preload(this.load, this.textures);
        AppConfig.SoundManager.preload(this.load);
    }

    create(): void {

        AppConfig.ImageManager.init();
        AppConfig.SoundManager.init(this.sound);


        this.completeLoading();
    }

    update(): void {
    }

    /**
     * Move to the next scene when preloading has completed
     */
    completeLoading(): void {

        //AppConfig.SceneManager.loadMenuScene(this.scene);
        //AppConfig.SceneManager.loadLevelSelectorScene(this.scene);
        AppConfig.SceneManager.loadMediumGameScene(this.scene);
    }
}

export default PreloadScene;
