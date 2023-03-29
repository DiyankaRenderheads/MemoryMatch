import { SceneType } from "../data/sceneData";
import AppConfig from '../config/appConfig';
import { BaseScene } from "./BaseScene";
import globalStyles from "../data/globalStyles";
import imageData from "../data/imageData";
import soundData from "../data/soundData";

//How to use the Environment variables
const serverURL = process.env.SERVER_URL;

/**
 * Game Sccene 
 */
export class GameScene extends BaseScene {

    constructor() {
        super(SceneType.Game, false);
    }

    preload(): void {
        super.preload();
    }

    create(): void {
        super.create();

        this.add.tileSprite(0, 0, 1080, 1920, imageData.sky.key).setOrigin(0);

    }
}

export default GameScene;
