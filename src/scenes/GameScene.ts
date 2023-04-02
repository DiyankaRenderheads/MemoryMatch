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
const beginShow=3000;
const matchShow=500;
const incorrectShow=500;


//Grid position variables
const row1y=150;
const row2y=300;
const row3y=450;
const row4y=600;
const row5y=750;
const row6y=900;

const x1=600;
const x2=750;
const x3=900;
const x4=1050;
const x5=1200;
const x6=1350;



export class GameScene extends BaseScene {

    private timer: Phaser.Time.TimerEvent; 
    private timerText: Phaser.GameObjects.Text; 
    private elapsedSeconds: number; 


    constructor() {
        super(SceneType.Game, false);
    }

    preload(): void {
        super.preload();
    }



    create(): void {
        super.create();
        this.UIGenerator();
        this.gridGenerator();
        this.timeGenerator();
        
    }

    timeGenerator():void{
        this.timerText = this.add.text(10, 100, '', { fontSize: '48px' });
        this.timer = this.time.addEvent({ delay: 1000, callback: this.onTimerTick, callbackScope: this, loop: true });
        this.elapsedSeconds = 0;
    }

    update() :void{
        const minutes = Math.floor(this.elapsedSeconds / 60);
        const seconds = this.elapsedSeconds % 60;
        this.timerText.setText(`Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }
    
    onTimerTick():void{
        this.elapsedSeconds++;
    }

  
    
    //Finds selected cards' image texture key, compares if they match
    cardClickSet(img: Phaser.GameObjects.Image): void{
      
        img.data.set('animal',img.texture.key );
       
        //Shows cards to player at beginning 
        setTimeout(() => 
        { 
            img.setTexture(imageData.blank.key);
        }, beginShow);


        img.on('pointerdown', function (pointer) 
        {
            img.setTexture(img.data.get('animal'));
           
            if(selectedCard1==null)
            {
                selectedCard1=img;
            }
            else if(selectedCard1!=null && selectedCard2==null)
            {
                selectedCard2=img;  
            }

            if(selectedCard1!=null && selectedCard2!=null)
            {
                //Cards match, disable card interaction
                if(selectedCard1.data.get('animal')==selectedCard2.data.get('animal'))
                {

                    setTimeout(() => 
                    { 
                        matches++;
                        console.log('matches: %d', matches);
                        //this.UIGenerator();
                        selectedCard1.setTexture(imageData.hidden.key);
                        selectedCard2.setTexture(imageData.hidden.key);
                        selectedCard1.disableInteractive();
                        selectedCard2.disableInteractive();
                        selectedCard1=null;
                        selectedCard2=null;
                    },  matchShow);
                      
                }

                //Cards don't match
                if(selectedCard1.data.get('animal')!=selectedCard2.data.get('animal'))
                {
                    setTimeout(() => 
                    {
                        tries++;
                        console.log('tries: %d', tries);
                        selectedCard1.setTexture(imageData.blank.key);
                        selectedCard2.setTexture(imageData.blank.key);
                        selectedCard1=null;
                        selectedCard2=null;
                    }, incorrectShow);
                   
                   
                }
            }
            

            

        }
        );

    }


      
      
    UIGenerator():void
    {
        const matchesUI=this.add.text
        (10, 0, '', 
        {
			fontSize: '48px',
			color: '#fff'
		})

        //matchesUI.setDataEnabled();
        //matchesUI.setData('current matches', matches);
        matchesUI.setText('Matches: '+ matches.toString());


        const TriesUI=this.add.text
        (10, 50, '', 
        {
			fontSize: '48px',
			color: '#fff'
		})

        //TriesUI.setDataEnabled();
        //TriesUI.setData('current tries', tries);
        TriesUI.setText('Tries: '+ tries.toString());
    }

    //Generates grid, sets cards image texture key and makes cards interactive
    gridGenerator(): void{
    
        let card1=this.add.image(x1, row1y, imageData.narwhal.key).setInteractive().setDataEnabled();
        let card2=this.add.image(x2, row1y, imageData.zebra.key).setInteractive().setDataEnabled();
        let card3=this.add.image(x3, row1y, imageData.rabbit.key).setInteractive().setDataEnabled();
        let card4=this.add.image(x4, row1y, imageData.whale.key).setInteractive().setDataEnabled();
        let card5=this.add.image(x5, row1y, imageData.gorilla.key).setInteractive().setDataEnabled();
        let card6=this.add.image(x6, row1y, imageData.parrot.key).setInteractive().setDataEnabled();
        let card7=this.add.image(x1,row2y,imageData.cow.key).setInteractive().setDataEnabled();
        let card8=this.add.image(x2, row2y, imageData.duck.key).setInteractive().setDataEnabled();
        let card9=this.add.image(x3, row2y, imageData.owl.key).setInteractive().setDataEnabled();
        let card10=this.add.image(x4, row2y, imageData.crocodile.key).setInteractive().setDataEnabled();
        let card11=this.add.image(x5, row2y, imageData.sloth.key).setInteractive().setDataEnabled();
        let card12=this.add.image(x6, row2y, imageData.pig.key).setInteractive().setDataEnabled();
        let card13=this.add.image(x1, row3y, imageData.rabbit.key).setInteractive().setDataEnabled();
        let card14=this.add.image(x2, row3y, imageData.whale.key).setInteractive().setDataEnabled();
        let card15=this.add.image(x3, row3y, imageData.hippo.key).setInteractive().setDataEnabled();
        let card16=this.add.image(x4, row3y, imageData.giraffe.key).setInteractive().setDataEnabled();
        let card17=this.add.image(x5, row3y, imageData.penguin.key).setInteractive().setDataEnabled();
        let card18=this.add.image(x6, row3y, imageData.monkey.key).setInteractive().setDataEnabled();
        let card19=this.add.image(x1,row4y,imageData.dog.key).setInteractive().setDataEnabled();
        let card20=this.add.image(x2, row4y, imageData.owl.key).setInteractive().setDataEnabled();
        let card21=this.add.image(x3, row4y, imageData.duck.key).setInteractive().setDataEnabled();
        let card22=this.add.image(x4, row4y, imageData.parrot.key).setInteractive().setDataEnabled();
        let card23=this.add.image(x5, row4y, imageData.giraffe.key).setInteractive().setDataEnabled();
        let card24=this.add.image(x6, row4y, imageData.sloth.key).setInteractive().setDataEnabled();
        let card25=this.add.image(x1,row5y,imageData.zebra.key).setInteractive().setDataEnabled();
        let card26=this.add.image(x2, row5y, imageData.gorilla.key).setInteractive().setDataEnabled();
        let card27=this.add.image(x3, row5y, imageData.monkey.key).setInteractive().setDataEnabled();
        let card28=this.add.image(x4, row5y, imageData.pig.key).setInteractive().setDataEnabled();
        let card29=this.add.image(x5, row5y, imageData.snake.key).setInteractive().setDataEnabled();
        let card30=this.add.image(x6, row5y, imageData.hippo.key).setInteractive().setDataEnabled();
        let card31=this.add.image(x1, row6y,imageData.penguin.key).setInteractive().setDataEnabled();
        let card32=this.add.image(x2, row6y, imageData.narwhal.key).setInteractive().setDataEnabled();
        let card33=this.add.image(x3, row6y, imageData.crocodile.key).setInteractive().setDataEnabled();
        let card34=this.add.image(x4, row6y, imageData.snake.key).setInteractive().setDataEnabled();
        let card35=this.add.image(x5, row6y, imageData.dog.key).setInteractive().setDataEnabled();
        let card36=this.add.image(x6, row6y, imageData.cow.key).setInteractive().setDataEnabled();

        this.cardClickSet(card1);
        this.cardClickSet(card2);
        this.cardClickSet(card3);
        this.cardClickSet(card4);
        this.cardClickSet(card5);
        this.cardClickSet(card6);
        this.cardClickSet(card7);
        this.cardClickSet(card8);
        this.cardClickSet(card9);
        this.cardClickSet(card10);
        this.cardClickSet(card11);
        this.cardClickSet(card12);
        this.cardClickSet(card13);
        this.cardClickSet(card14);
        this.cardClickSet(card15);
        this.cardClickSet(card16);
        this.cardClickSet(card17);
        this.cardClickSet(card18);
        this.cardClickSet(card19);
        this.cardClickSet(card20);
        this.cardClickSet(card21);
        this.cardClickSet(card22);
        this.cardClickSet(card23);
        this.cardClickSet(card24);
        this.cardClickSet(card25);
        this.cardClickSet(card26);
        this.cardClickSet(card27);
        this.cardClickSet(card28);
        this.cardClickSet(card29);
        this.cardClickSet(card30);
        this.cardClickSet(card31);
        this.cardClickSet(card32);
        this.cardClickSet(card33);
        this.cardClickSet(card34);
        this.cardClickSet(card35);
        this.cardClickSet(card36);
    }


    
    
}

export default GameScene;
