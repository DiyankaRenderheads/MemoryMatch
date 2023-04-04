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

export class MainMenuScene extends BaseScene {


    private card1: Phaser.GameObjects.Image;

    constructor() {
        super(SceneType.Menu, false);
    }

    preload(): void {
        super.preload();
    }

    create(): void {
        super.create();
       this.card1=this.add.image(100, 100, imageData.narwhal.key).setDataEnabled();
    }

    update(): void {
        
 
    }






}



export default MainMenuScene;
