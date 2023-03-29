import imageData, { ImageType } from '../data/imageData';

/**
 * Manages the loading of images, sprites and atlasses 
 */
export default class ImageManager {

    constructor() {
    }

    init(): void {
        console.log('[Image Manager] Started');
    }

    /**
     * Preloads the assets for the Login/Boot screen only
     * @param phaserLoader The Phaser Loader object to perform the preloading of images
     */
    preloadBootScreen(phaserLoader: Phaser.Loader.LoaderPlugin): void {

      //  phaserLoader.multiatlas(imageData.LoadingScreen.key, imageData.LoadingScreen.atlasJson, imageData.LoadingScreen.src);
    }

    /**
     * Preloads image assets into memory
     * @param phaserLoader The Phaser Loader object to perform the preloading of images
     * @param textures The Phasaer Textures object for checking if the textures have already been loaded
     */
    preload(phaserLoader: Phaser.Loader.LoaderPlugin, textures: Phaser.Textures.TextureManager): void {

        //might need to pass in multiple image formats such as sprite sheets
        Object.keys(imageData).forEach(item => {

            if (imageData[item].type == ImageType.Image && !textures.exists(imageData[item].key)) {
                console.log("[Image Manager] Adding image: " + item);
                phaserLoader.image(imageData[item].key, imageData[item].src);
            }

            if (imageData[item].type == ImageType.Atlas && !textures.exists(imageData[item].key)) {
                console.log("[Image Manager] Adding atlas: " + item);
                phaserLoader.multiatlas(imageData[item].key, imageData[item].atlasJson, imageData[item].src);
            }
        });
    }
}