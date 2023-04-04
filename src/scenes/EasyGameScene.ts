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


//Selected card variables
let selectedCard1;
selectedCard1 as Phaser.GameObjects.Image;
let selectedCard2;
selectedCard2 as Phaser.GameObjects.Image;

//Matches and tries variables
let matches=0;
let tries=0;


//Time variables
const beginShow=5000;
const matchShow=500;
const incorrectShow=200;


//Grid position variables
const row1y=160;
const yinc=150;

const x1=600;
const xinc=150;

//Win variable
let win=8;


export class EasyGameScene extends BaseScene {


    constructor() {
        super(SceneType.Easy, false);
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



export default EasyGameScene;
