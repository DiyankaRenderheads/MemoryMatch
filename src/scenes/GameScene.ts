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
const incorrectShow=300;


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

    private startTime: number;
    private matchesText: Phaser.GameObjects.Text;
    private triesText: Phaser.GameObjects.Text;
    private timerText: Phaser.GameObjects.Text;
    private timer: Phaser.Time.TimerEvent;
    
    constructor() {
        super(SceneType.Game, false);
    }

    preload(): void {
        super.preload();
    }

    create(): void {
        super.create();
        this.gridGenerator();
        this.UIgenerator();
        this.time.delayedCall(beginShow, this.startTimer, [], this);
    }

    update(): void {
  
    }


    //Finds selected cards' image texture key, compares if they match
    cardClickSet(img: Phaser.GameObjects.Image): void{
      
        img.data.set('animal',img.texture.key );
        let self=this;

        //Shows cards to player at beginning then hides cards and makes cards interactive
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
                        self.addMatches();
                        selectedCard1.setTexture(imageData.hidden.key);
                        selectedCard2.setTexture(imageData.hidden.key);
                        selectedCard1.disableInteractive();
                        selectedCard2.disableInteractive();
                        selectedCard1=null;
                        selectedCard2=null;
                    },  matchShow);
                   
                }

                //Cards don't match keeps interaction enabled
                if(selectedCard1.data.get('animal')!=selectedCard2.data.get('animal'))
                {
                    setTimeout(() => 
                    {
                        tries++;
                        console.log('tries: %d', tries);
                        self.addTries();
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

    //Adds +1 to score if cards match
    addMatches() {
        this.matchesText.setText("Matches: " + matches.toString() +"/16");
    }

    //Adds +1 to tries if cards don;t match
    addTries() :void{
        this.triesText.setText("Tries: " + tries.toString());
    }



    //Generates the UI for the matches/tries/time
    UIgenerator():void{
        this.matchesText = this.add.text(10, 10, 'Matches: 0/16', { color: '#ffffff', fontSize: '48px' });
        this.triesText = this.add.text(10, 50, 'Tries: 0', { color: '#ffffff', fontSize: '48px' });
        this.timerText = this.add.text(10, 100, 'Time: 00:00', { color: '#ffffff', fontSize: '48px' });
    }   
    

    //Creaters timer 
    startTimer():void {
    this.startTime = this.time.now; 
    this.timer = this.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.updateTimer,
      callbackScope: this,
    });
  }

    //Updates timer
    updateTimer():void {
    const elapsedSeconds = Math.floor((this.time.now - this.startTime) / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;

    this.timerText.setText(`Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

  }



    //Generates grid, sets cards image texture key and makes cards interactive
    gridGenerator(): void{
        
        
        let card1=this.add.image(x1, row1y, imageData.narwhal.key).setDataEnabled().setInteractive();;
        let card2=this.add.image(x2, row1y, imageData.zebra.key).setDataEnabled().setInteractive();;
        let card3=this.add.image(x3, row1y, imageData.rabbit.key).setDataEnabled().setInteractive();;
        let card4=this.add.image(x4, row1y, imageData.whale.key).setDataEnabled().setInteractive();;
        let card5=this.add.image(x5, row1y, imageData.gorilla.key).setDataEnabled().setInteractive();;
        let card6=this.add.image(x6, row1y, imageData.parrot.key).setDataEnabled().setInteractive();;
        let card7=this.add.image(x1,row2y,imageData.cow.key).setDataEnabled().setInteractive();;
        let card8=this.add.image(x2, row2y, imageData.duck.key).setDataEnabled().setInteractive();;
        let card9=this.add.image(x3, row2y, imageData.owl.key).setDataEnabled().setInteractive();;
        let card10=this.add.image(x4, row2y, imageData.crocodile.key).setDataEnabled().setInteractive();;
        let card11=this.add.image(x5, row2y, imageData.sloth.key).setDataEnabled().setInteractive();;
        let card12=this.add.image(x6, row2y, imageData.pig.key).setDataEnabled().setInteractive();;
        let card13=this.add.image(x1, row3y, imageData.rabbit.key).setDataEnabled().setInteractive();;
        let card14=this.add.image(x2, row3y, imageData.whale.key).setDataEnabled().setInteractive();;
        let card15=this.add.image(x3, row3y, imageData.hippo.key).setDataEnabled().setInteractive();;
        let card16=this.add.image(x4, row3y, imageData.giraffe.key).setDataEnabled().setInteractive();;
        let card17=this.add.image(x5, row3y, imageData.penguin.key).setDataEnabled().setInteractive();;
        let card18=this.add.image(x6, row3y, imageData.monkey.key).setDataEnabled().setInteractive();;
        let card19=this.add.image(x1,row4y,imageData.dog.key).setDataEnabled().setInteractive();;
        let card20=this.add.image(x2, row4y, imageData.owl.key).setDataEnabled().setInteractive();;
        let card21=this.add.image(x3, row4y, imageData.duck.key).setDataEnabled().setInteractive();;
        let card22=this.add.image(x4, row4y, imageData.parrot.key).setDataEnabled().setInteractive();;
        let card23=this.add.image(x5, row4y, imageData.giraffe.key).setDataEnabled().setInteractive();;
        let card24=this.add.image(x6, row4y, imageData.sloth.key).setDataEnabled().setInteractive();;
        let card25=this.add.image(x1,row5y,imageData.zebra.key).setDataEnabled().setInteractive();;
        let card26=this.add.image(x2, row5y, imageData.gorilla.key).setDataEnabled().setInteractive();;
        let card27=this.add.image(x3, row5y, imageData.monkey.key).setDataEnabled().setInteractive();;
        let card28=this.add.image(x4, row5y, imageData.pig.key).setDataEnabled().setInteractive();;
        let card29=this.add.image(x5, row5y, imageData.snake.key).setDataEnabled().setInteractive();;
        let card30=this.add.image(x6, row5y, imageData.hippo.key).setDataEnabled().setInteractive();;
        let card31=this.add.image(x1, row6y,imageData.penguin.key).setDataEnabled().setInteractive();;
        let card32=this.add.image(x2, row6y, imageData.narwhal.key).setDataEnabled().setInteractive();;
        let card33=this.add.image(x3, row6y, imageData.crocodile.key).setDataEnabled().setInteractive();;
        let card34=this.add.image(x4, row6y, imageData.snake.key).setDataEnabled().setInteractive();;
        let card35=this.add.image(x5, row6y, imageData.dog.key).setDataEnabled().setInteractive();;
        let card36=this.add.image(x6, row6y, imageData.cow.key).setDataEnabled().setInteractive();;

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
