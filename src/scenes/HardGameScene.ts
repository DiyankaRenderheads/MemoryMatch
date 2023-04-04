import { SceneType } from "../data/sceneData";
import AppConfig from '../config/appConfig';
import { BaseScene } from "./BaseScene";
import globalStyles from "../data/globalStyles";
import imageData from "../data/imageData";
import soundData from "../data/soundData";
import { Sleeping } from "matter";
import fontData from "../data/fontData";

//How to use the Environment variables
const serverURL = process.env.SERVER_URL;

export class HardGameScene extends BaseScene {


    constructor() {
        super(SceneType.Hard, false);
    }

    preload(): void {
        super.preload();
    }

    create(): void {
        super.create();

    }

    update(): void {
        
 
    }

}



export default HardGameScene;
