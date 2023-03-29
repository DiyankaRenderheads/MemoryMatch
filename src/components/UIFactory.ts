import * as Phaser from "phaser";
import imageData, { ImageDataObject } from '../data/imageData';
//import globalStyles from "../data/globalStyles";
import AppConfig from '../config/appConfig';
import soundData from "../data/soundData";

/**
 * The UI Factory that creates common UI elements
 */
export default class UIFactory {

    /**
     * The Phaser graphics plugin
     */
    graphics: Phaser.GameObjects.Graphics;

    /**
     * The Phaser game scene that this UI Factory belongs to
     */
    scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.graphics = scene.add.graphics();
    }

    init(): void {
    }

    /**
     * @returns a background image with colour #1B2039 for UI Screens
     */
    darkBlueBackground() {
        let bgImage = this.scene.add.rectangle(0, 0, AppConfig.WIDTH, AppConfig.HEIGHT, 0x1B2039).setOrigin(0, 0);
        return bgImage;
    }

    /**
     * @returns a background image with colour 0x62A8C3 for UI Screens
     */
    lightBackground() {
        let bgImage = this.scene.add.rectangle(0, 0, AppConfig.WIDTH, AppConfig.HEIGHT, 0x62A8C3).setOrigin(0, 0);
        return bgImage;
    }

    /**
     * A simple nine slice sprite loaded from an atlas
     * @param x starting x position
     * @param y starting y position
     * @param width of the final sprite
     * @param height of the final sprite
     * @param sprite the ImageDataObject corresponding to the sprite from the atlas to use
     * @param borderPixels the width and height to offset for a corner slice
     * @param safeAreaPixels pixels to offset when computing the safe usage area
     * @returns the final RenderTexture
     */
    nineSliceSprite(x: number, y: number, width: number, height: number, sprite: ImageDataObject, borderPixels: number, safeAreaPixels: number, scrollFactor?: number): Phaser.GameObjects.RenderTexture {

        //sprite asset to represent  
        let nineSliceSprite = this.scene.add.nineslice(
            x, y,   // this is the starting x/y location
            width, height,   // the width and height of your object
            //@ts-ignore HACK, the module does not include this syntax in the type definition, but we need to use it for loading a nineslice from a spritesheet
            { key: sprite.atlas, frame: sprite.src }, // a key to an already loaded image
            borderPixels,
            safeAreaPixels
        ).setOrigin(0.5, 0.5);

        if (scrollFactor) {
            nineSliceSprite.setScrollFactor(scrollFactor);
        }

        return nineSliceSprite;
    }

    /**
     * A nine sliced banner loaded from an atlas, used underneath text elements
     * @param x position
     * @param y position
     * @param width of the banner
     * @param height of the banner
     * @param sprite the ImageDataObject corresponding to the sprite from the atlas to use
     * @param borderPixels the width and height to offset for a corner slice
     * @param safeAreaPixels pixels to offset when computing the safe usage area
     * @param scrollFactor optionally sets the camera scroll factor
     * @returns the final RenderTexture
     */
    nineSliceBanner(x: number, y: number, width: number, height: number, sprite: ImageDataObject, borderPixels: number, safeAreaPixels: number, scrollFactor?: number): Phaser.GameObjects.RenderTexture {

        //sprite asset to represent  
        let nineSliceSprite = this.scene.add.nineslice(
            x, y,   // this is the starting x/y location
            width, height,   // the width and height of your object
            //@ts-ignore HACK, the module does not include this syntax in the type definition, but we need to use it for loading a nineslice from a spritesheet
            { key: sprite.atlas, frame: sprite.src }, // a key to an already loaded image
            [0, 113, 0, 200],
            safeAreaPixels
        ).setOrigin(0.5, 0.5);

        if (scrollFactor) {
            nineSliceSprite.setScrollFactor(scrollFactor);
        }

        return nineSliceSprite;
    }

    /**
     * Sets up a button and label for the debug screen
     * @param x position
     * @param y position
     * @param action to invoke on pointerup
     * @param text label for the button
     * @param textStyle style to apply to the button label
     */
    debugTextButton(x: number, y: number, action: () => void, text: string, textStyle: Phaser.Types.GameObjects.Text.TextStyle) {

        let button = this.scene.add.rectangle(x, y, 150, 50, 0x6666ff).setInteractive();

        button.on('pointerup', () => {
            console.log("Up");
            if (action) {
                action();
            }
        });

        //create a text box
        let textBox = this.scene.add.text(x, y, text, textStyle);

        //set the origin so that it aligns to centre
        textBox.setOrigin(0.5, 0.5);
    }
}