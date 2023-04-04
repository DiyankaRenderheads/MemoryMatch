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

let imgStartPos=570;
let imgStartPosY= 730;

export class MainMenuScene extends BaseScene {


    private whiteBG: Phaser.GameObjects.Image;

    private title: Phaser.GameObjects.Text;
    private titlePopL: Phaser.GameObjects.Text;
    private titlePopR: Phaser.GameObjects.Text;

    private subtitle: Phaser.GameObjects.Text;

    private startBtn: Phaser.GameObjects.Text;
    private startBtnPopL: Phaser.GameObjects.Text;
    private startBtnPopR: Phaser.GameObjects.Text;

    private helpBtn: Phaser.GameObjects.Text;
    private helpBtnPopL: Phaser.GameObjects.Text;
    private helpBtnPopR: Phaser.GameObjects.Text;

    private parrot: Phaser.GameObjects.Image; 
    private chick: Phaser.GameObjects.Image;
    private pig: Phaser.GameObjects.Image;
    private snake: Phaser.GameObjects.Image;
    private narwhal: Phaser.GameObjects.Image;
    private gorilla: Phaser.GameObjects.Image;

    constructor() {
        super(SceneType.Menu, false);
    }

    preload(): void {
        super.preload();
    }

    create(): void {
        super.create();

        //Background
        this.whiteBG=this.add.image(960,600, imageData.banner.key);
        this.whiteBG.setDisplaySize(2000,1500);
  
        //Title functionality
        this.title = this.add.text(250,410,'Animal Memory Match', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#595959', 
            fontSize: '130px', 
            align: 'center',
        });
        this.title.setInteractive();

        this.titlePopL = this.add.text(200,410,'', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#595959', 
            fontSize: '130px', 
            align: 'center',
        });

        this.titlePopR = this.add.text(1750,410,'', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#595959', 
            fontSize: '130px', 
            align: 'center',
        });


        this.title.on('pointerover', () => {
            this.titlePopL.setText('<');
            this.titlePopR.setText('>');
        });
          
        this.title.on('pointerout', () => {
            this.titlePopL.setText('');
            this.titlePopR.setText('');
        });



        //Subtitle
        this.subtitle = this.add.text(670,340,'(I am bad at naming games.)', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#595959', 
            fontSize: '40px', 
            align: 'center',
        });



        //Start button functionality 
        this.startBtn = this.add.text(650,580,'Click here to Start!', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#595959', 
            fontSize: '60px', 
            align: 'center',
        });
        this.startBtn.setInteractive();
       
        this.startBtnPopL=this.add.text(630,580, '',
        {
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#595959', 
            fontSize: '60px', 
            align: 'center',
        });

        this.startBtnPopR=this.add.text(1250,580, '',
        {
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#595959', 
            fontSize: '60px', 
            align: 'center',
        });

        this.startBtn.on('pointerover', () => {
            this.startBtnPopL.setText('<');
            this.startBtnPopR.setText('>');
        });
          
        this.startBtn.on('pointerout', () => {
            this.startBtnPopL.setText('');
            this.startBtnPopR.setText('');
        });

        //Start button goes to level selector
        this.startBtn.on('pointerdown', () =>  AppConfig.SceneManager.loadLevelSelectorScene(this.scene));




        //Help button fuctionality
        this.helpBtn = this.add.text(1570,20,'How to Play', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '50px', 
            align: 'center',
        });
        this.helpBtn.setInteractive();
        
        this.helpBtnPopL = this.add.text(1540,20,'', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '50px', 
            align: 'center',
        });

        this.helpBtnPopR = this.add.text(1890,20,'', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '50px', 
            align: 'center',
        });


        this.helpBtn.on('pointerover', () => {
            this.helpBtnPopL.setText('<');
            this.helpBtnPopR.setText('>');
        });
          
        this.helpBtn.on('pointerout', () => {
            this.helpBtnPopL.setText('');
            this.helpBtnPopR.setText('');
        });


        this.helpBtn.on('pointerdown', () =>  AppConfig.SceneManager.loadHowtoPlayScene(this.scene));


        //Images 
        this.parrot=this.add.image(imgStartPos,imgStartPosY, imageData.parrot.key);
        this.chick=this.add.image(imgStartPos+(150), imgStartPosY, imageData.chick.key);
        this.pig=this.add.image(imgStartPos+(150*2), imgStartPosY, imageData.pig.key);
        this.snake=this.add.image(imgStartPos+(150*3), imgStartPosY, imageData.snake.key);
        this.narwhal=this.add.image(imgStartPos+(150*4), imgStartPosY, imageData.narwhal.key);
        this.gorilla=this.add.image(imgStartPos+(150*5), imgStartPosY, imageData.gorilla.key);
    }

    update(): void {
        
 
    }






}



export default MainMenuScene;
