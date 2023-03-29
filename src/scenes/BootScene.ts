import imageData from "../data/imageData";
import { SceneType } from "../data/sceneData";
import AppConfig from '../config/appConfig';
import { BaseScene } from "./BaseScene";
import globalStyles from "../data/globalStyles";

//How to use the Environment variables
const developmentMode = process.env.MODE;

/**
* Loads and displays the inital images for the loading screen
*/
export class BootScene extends BaseScene {

    constructor() {
        super(SceneType.Boot, false);
    }

    preload(): void {
        super.preload();
        AppConfig.ImageManager.preloadBootScreen(this.load);
    }

    create(): void {
        super.create();

        this.scale.displaySize.setAspectRatio(AppConfig.WIDTH / AppConfig.HEIGHT);
        this.scale.refresh();

        AppConfig.SceneManager.loadPreload(this.scene);

        console.log(process.env.MODE);
        if (developmentMode === 'debug') {
            AppConfig.SceneManager.loadDebugScene(this.scene);
        }
    }

    update(): void {
    }
}

export default BootScene;
