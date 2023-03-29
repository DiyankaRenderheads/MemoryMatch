import * as Phaser from "phaser";
import { SceneType } from "../data/sceneData";
import { BaseScene } from "./BaseScene";
import globalStyles from "../data/globalStyles";
import AppConfig from "../config/appConfig";
import soundData from "../data/soundData";

/**
 * This scene is used for general debug UI
 */
export class DebugScene extends BaseScene {

    /**
     * The phaser text object to display the fps
     */
    private _fpsText: Phaser.GameObjects.Text;

    /**
     * The current version number
     */
    private _versionNumber: Phaser.GameObjects.Text;

    /**
     * hex code for the magenta color
     */
    private _magentaHex = 0xFF00FF;

    /**
     * The layer to toggle visibility
     */
    private _debugUILayer: Phaser.GameObjects.Layer;

    /**
     * An array of all the debug screen buttons
     */
    private _debugButtons: Phaser.GameObjects.Rectangle[] = new Array();

    constructor() {
        super(SceneType.Debug, false);
    }

    /**
     * Phaser preload step, also runs the BaseScene preload function
     * Load any debug specific UI here
     */
    preload() {
        super.preload();
    }

    /**
     * Extracts the current version number from the Phaser Game configuration
     * @param game the current phaser game
     * @returns the Phaser Text object containing the development version
     */
    versionNumber(game: Phaser.Game): Phaser.GameObjects.Text {
        let versionText = this.add.text(10, AppConfig.HEIGHT - 30, "Dev Version " + game.config.gameVersion, globalStyles.DebugText).setOrigin(0, 1);
        versionText.setDepth(200);
        return versionText;
    }

    /**
     * The Frame Per Second debug stat
     * @returns the Phaser Text object for adding the fps to
     */
    fps(): Phaser.GameObjects.Text {
        let fpsText = this.add.text(AppConfig.WIDTH - 50, AppConfig.HEIGHT - 30, "60", globalStyles.DebugText).setOrigin(1, 1);
        fpsText.setDepth(200);
        return fpsText;
    }

    /**
     * Creates a grid based on the grid division to display on the game world
     * @returns a grid to overlay the game world
     */
    debugUIGrid(): Phaser.GameObjects.Grid {
        let _gridDivision = 4;
        var grid = this.add.grid(AppConfig.CENTER_WIDTH, AppConfig.CENTER_HEIGHT, AppConfig.WIDTH, AppConfig.HEIGHT, AppConfig.WIDTH / _gridDivision, AppConfig.HEIGHT / _gridDivision, 0, 0, this._magentaHex);
        return grid;
    }

    /**
     * A debug button for logging out from the identity server
     */
    debugButton(_debugUILayer: Phaser.GameObjects.Layer, text: string, callback: () => void): Phaser.GameObjects.Rectangle {

        let button = this.add.rectangle(100 + (205 * this._debugButtons.length), AppConfig.HEIGHT - 100, 200, 50, 0x6666ff).setInteractive();

        button.on('pointerdown', () => {
            callback();
        });
        button.setDepth(200);
        _debugUILayer.add(button);

        //create a text box
        let textBox = this.add.text(100 + (205 * this._debugButtons.length), AppConfig.HEIGHT - 100, text, globalStyles.DebugText);
        //set the origin so that it aligns to centre
        textBox.setOrigin(0.5, 0.5);
        textBox.setDepth(200);
        _debugUILayer.add(textBox);

        this._debugButtons.push(button);

        return button;
    }

    /**
     * The Phaser create function for building the Debug scene
     */
    create() {

        super.create();

        this._debugUILayer = this.add.layer();

        //Add components to the debug screen
        this._debugUILayer.add(this.versionNumber(this.sys.game));

        this._fpsText = this.fps();
        this._debugUILayer.add(this._fpsText);

        this._debugUILayer.add(this.debugUIGrid());

        //Add any debug buttons to the _debugButtons array to toggle interactivity
        this.debugButton(this._debugUILayer, "Test Sound", () => {
            //AppConfig.SoundManager.play(soundData.DebugSound);
        });

        //toggle Debug Layer using 'U'
        this.input.keyboard.addKey('U').on('down', this.toggleDebugScene, this);

        AppConfig.SceneManager.setDebugScene(this.scene);
    }

    /**
     * Toggles the debug scene visibility as well as the debug button interactivity
     */
    toggleDebugScene() {
        this._debugUILayer.visible = !this._debugUILayer.visible;

        if (this._debugUILayer.visible) {
            this.scene.bringToTop();

            for (let i = 0; i < this._debugButtons.length; i++) {
                this._debugButtons[i].setInteractive();
            }
        }
        else {
            for (let i = 0; i < this._debugButtons.length; i++) {
                this._debugButtons[i].removeInteractive();
            }
        }
    }

    /**
     * Update step to display the fps at runtime
     */
    update() {
        this._fpsText.setText("FPS: " + Phaser.Math.RoundTo(this.sys.game.loop.actualFps, 0));
    }
}

export default DebugScene;
