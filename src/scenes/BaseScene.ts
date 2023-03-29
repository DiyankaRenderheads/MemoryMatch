import * as Phaser from "phaser";
import UIFactory from "../components/UIFactory";
import AppConfig from "../config/appConfig";

/**
 * A parent scene class to be shared by all Phaser scenes
 * Handles common initialisation and components
 */
export class BaseScene extends Phaser.Scene {

    /**
     * The Scene Key used by Phaser
     */
    private _sceneKey: string;

    /**
     * The configuration settings that was used to start the Phaser Game
     */
    private _phaserConfig: Phaser.Core.Config;

    /**
     * The UI Factory that creates common UI elements
     */
    UIFactory: UIFactory;

    constructor(sceneKey: string, isActive: boolean) {
        super({
            key: sceneKey,
            active: isActive
        });

        this._sceneKey = sceneKey as string;
    }

    /**
     * Initialises the common variables that can be used in child scenes
     */
    init(data?: { [key: string]: any }) {
        this._phaserConfig = this.sys.game.config as Phaser.Core.Config;
    }

    /**
     * Performs any common preloading of assets
     */
    preload() {
        console.log(`Preloading scene (${this._sceneKey})`);
    }

    /**
     * Creates the common components that are needed for each child scene
     */
    create() {

        //start a new UI Factory
        this.UIFactory = new UIFactory(this);
        //starts the factory
        this.UIFactory.init();
    }

    update() {
    }
}

export default BaseScene;