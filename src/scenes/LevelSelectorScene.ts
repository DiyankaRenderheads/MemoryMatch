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


export class LevelSelectorScene extends BaseScene {

    private whiteBG: Phaser.GameObjects.Image;
    private heading: Phaser.GameObjects.Text;

    private easy: Phaser.GameObjects.Text;
    private easyPopL:Phaser.GameObjects.Text;
    private easyPopR: Phaser.GameObjects.Text;

    private medium: Phaser.GameObjects.Text;
    private mediumPopL:Phaser.GameObjects.Text;
    private mediumPopR: Phaser.GameObjects.Text;

    private hard: Phaser.GameObjects.Text;
    private hardPopL:Phaser.GameObjects.Text;
    private hardPopR: Phaser.GameObjects.Text;

    constructor() {
        super(SceneType.LevelSelector, false);
    }

    preload(): void {
        super.preload();
        this.load.audio('click', 'src/assets/sounds/ClickSound.mp3');
    }

    create(): void {
        super.create();

          //Background
          this.whiteBG=this.add.image(960,200, imageData.banner.key);
          this.whiteBG.setDisplaySize(2000,500);

          //Heading 
          this.heading = this.add.text(500,120,'Choose a Level!', 
          { 
              fontFamily: globalStyles.NiceSugarText.fontFamily,
              color: '#595959', 
              fontSize: '130px', 
              align: 'center',
          });


        //Easy 
        this.easy = this.add.text(850,400,'Easy', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '120px', 
            align: 'center',
        });
        this.easy.setInteractive();
        
        this.easyPopL= this.add.text(790,400,'', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '120px', 
            align: 'center',
        });

        this.easyPopR= this.add.text(1140,400,'', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '120px', 
            align: 'center',
        });


        this.easy.on('pointerover', () => {
            this.easyPopL.setText('<');
            this.easyPopR.setText('>');
        });
          
        this.easy.on('pointerout', () => {
            this.easyPopL.setText('');
            this.easyPopR.setText('');
        });

        var clickSound = this.sound.add('click');
        this.easy.on('pointerdown', () =>  clickSound.play());
        this.easy.on('pointerdown', () =>  AppConfig.SceneManager.loadEasyScene(this.scene));

        //Medium
        this.medium = this.add.text(760,600,'Medium', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '120px', 
            align: 'center',
        });
        this.medium.setInteractive();


        this.mediumPopL= this.add.text(710,600,'', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '120px', 
            align: 'center',
        });

        this.mediumPopR= this.add.text(1230,600,'', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '120px', 
            align: 'center',
        });


        
        this.medium.on('pointerover', () => {
            this.mediumPopL.setText('<');
            this.mediumPopR.setText('>');
        });
          
        this.medium.on('pointerout', () => {
            this.mediumPopL.setText('');
            this.mediumPopR.setText('');
        });

        
        var clickSound2 = this.sound.add('click');
        this.medium.on('pointerdown', () =>  clickSound2.play());
        this.medium.on('pointerdown', () =>  AppConfig.SceneManager.loadMediumGameScene(this.scene));



        //Hard
        this.hard= this.add.text(850,800,'Hard', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '120px', 
            align: 'center',
        });
        this.hard.setInteractive();


        this.hardPopL= this.add.text(800,800,'', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '120px', 
            align: 'center',
        });

        this.hardPopR= this.add.text(1150,800,'', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '120px', 
            align: 'center',
        });



        this.hard.on('pointerover', () => {
            this.hardPopL.setText('<');
            this.hardPopR.setText('>');
        });
          
        this.hard.on('pointerout', () => {
            this.hardPopL.setText('');
            this.hardPopR.setText('');
        });

        var clickSound3 = this.sound.add('click');
        this.hard.on('pointerdown', () =>  clickSound3.play());
        this.hard.on('pointerdown', () =>  AppConfig.SceneManager.loadHardScene(this.scene));


    }

    update(): void {
        
 
    }






}



export default LevelSelectorScene;
