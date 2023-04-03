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
const matchShow=300;
const incorrectShow=200;


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

//Win variable
let win=18;


export class GameScene extends BaseScene {

    private startTime: number;
    private matchesText: Phaser.GameObjects.Text;
    private triesText: Phaser.GameObjects.Text;
    private timerText: Phaser.GameObjects.Text;
    private timer: Phaser.Time.TimerEvent;
    
    private backButton: Phaser.GameObjects.Image;
    private backText: Phaser.GameObjects.Text;
    private clock: Phaser.GameObjects.Image;
    private banner: Phaser.GameObjects.Image;
    private bannerText: Phaser.GameObjects.Text;

    private card1: Phaser.GameObjects.Image;
    private card2: Phaser.GameObjects.Image;
    private card3: Phaser.GameObjects.Image;
    private card4: Phaser.GameObjects.Image;
    private card5: Phaser.GameObjects.Image;
    private card6: Phaser.GameObjects.Image;
    private card7: Phaser.GameObjects.Image;
    private card8: Phaser.GameObjects.Image;
    private card9: Phaser.GameObjects.Image;
    private card10: Phaser.GameObjects.Image;
    private card11: Phaser.GameObjects.Image;
    private card12: Phaser.GameObjects.Image;
    private card13: Phaser.GameObjects.Image;
    private card14: Phaser.GameObjects.Image;
    private card15: Phaser.GameObjects.Image;
    private card16: Phaser.GameObjects.Image;
    private card17: Phaser.GameObjects.Image;
    private card18: Phaser.GameObjects.Image;
    private card19: Phaser.GameObjects.Image;
    private card20: Phaser.GameObjects.Image; 
    private card21: Phaser.GameObjects.Image;
    private card22: Phaser.GameObjects.Image;
    private card23: Phaser.GameObjects.Image;
    private card24: Phaser.GameObjects.Image;
    private card25: Phaser.GameObjects.Image;
    private card26: Phaser.GameObjects.Image;
    private card27: Phaser.GameObjects.Image;
    private card28: Phaser.GameObjects.Image;
    private card29: Phaser.GameObjects.Image;
    private card30: Phaser.GameObjects.Image;
    private card31: Phaser.GameObjects.Image;
    private card32: Phaser.GameObjects.Image;
    private card33: Phaser.GameObjects.Image;
    private card34: Phaser.GameObjects.Image;
    private card35: Phaser.GameObjects.Image;
    private card36: Phaser.GameObjects.Image;


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
        this.cardsDisabled();
      

        this.backButton.setInteractive();
        this.time.delayedCall(beginShow, this.startTimer, [], this);
    }

    update(): void {
        
        this.backButton.on('pointerdown',  () => console.log("Back Button"));
    }


    //Finds selected cards' image texture key, compares if they match
    cardClickSet(img: Phaser.GameObjects.Image): void{
      
        img.data.set('animal',img.texture.key );
        let self=this;

        //Shows cards to player at beginning then hides cards and makes cards interactive
        setTimeout(() => 
        { 
            img.setTexture(imageData.blank.key);
            self.cardsEnabled();
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



    //Generates the UI for the matches/tries/time
    UIgenerator():void{
        this.matchesText = this.add.text(700, 1000, '< Matches: 0/18 >', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '70px',
            align: 'center',
        });
        this.triesText = this.add.text(800, 15, '< Attempts: 0 >', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '50px', 
            align: 'center',
        });

        this.timerText = this.add.text(100, 20, '< Time: 00:00 >', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '50px', 
            align: 'center',
        });
        this.clock=this.add.image(50,45, imageData.clock.key);
        this.clock.setScale(.75);

        this.backText = this.add.text( 1620,20,'< Back >', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '50px', 
            align: 'center',
        });
        this.backButton=this.add.image(1870,50, imageData.back.key);

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

    this.timerText.setText('< '+`Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`+' >');

  }


    //Adds +1 to score if cards match
    addMatches() {
        this.matchesText.setText("< Matches: " + matches.toString() +"/18 >");
        if(matches>=win)
        {
            console.log('You Win!');
            this.timer.remove(false);
            this.cardsDisabled();
            this.gameOver();
        }
    }

    //Adds +1 to tries if cards don;t match
    addTries() :void{
        this.triesText.setText("< Attempts: " + tries.toString() +" >");
        
    }

    //Shows game is over
    gameOver():void{
        this.banner=this.add.image(960,540,imageData.banner.key);
        this.bannerText = this.add.text(750, 450,'< You Win! >', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#555555', 
            fontSize: '100px', 
            align: 'center',
        });
    }


    //Generates grid, sets cards image texture key and position
    gridGenerator(): void{
        
        
        this.card1=this.add.image(x1, row1y, imageData.narwhal.key).setDataEnabled();
        this.card2=this.add.image(x2, row1y, imageData.zebra.key).setDataEnabled();
        this.card3=this.add.image(x3, row1y, imageData.rabbit.key).setDataEnabled();
        this.card4=this.add.image(x4, row1y, imageData.whale.key).setDataEnabled();
        this.card5=this.add.image(x5, row1y, imageData.gorilla.key).setDataEnabled();
        this.card6=this.add.image(x6, row1y, imageData.parrot.key).setDataEnabled();
        this.card7=this.add.image(x1,row2y,imageData.cow.key).setDataEnabled();
        this.card8=this.add.image(x2, row2y, imageData.duck.key).setDataEnabled();
        this.card9=this.add.image(x3, row2y, imageData.owl.key).setDataEnabled();
        this.card10=this.add.image(x4, row2y, imageData.crocodile.key).setDataEnabled();
        this.card11=this.add.image(x5, row2y, imageData.sloth.key).setDataEnabled();
        this.card12=this.add.image(x6, row2y, imageData.pig.key).setDataEnabled();
        this.card13=this.add.image(x1, row3y, imageData.rabbit.key).setDataEnabled();
        this.card14=this.add.image(x2, row3y, imageData.whale.key).setDataEnabled();
        this.card15=this.add.image(x3, row3y, imageData.hippo.key).setDataEnabled();
        this.card16=this.add.image(x4, row3y, imageData.giraffe.key).setDataEnabled();
        this.card17=this.add.image(x5, row3y, imageData.penguin.key).setDataEnabled();
        this.card18=this.add.image(x6, row3y, imageData.monkey.key).setDataEnabled();
        this.card19=this.add.image(x1,row4y,imageData.dog.key).setDataEnabled();
        this.card20=this.add.image(x2, row4y, imageData.owl.key).setDataEnabled();
        this.card21=this.add.image(x3, row4y, imageData.duck.key).setDataEnabled();
        this.card22=this.add.image(x4, row4y, imageData.parrot.key).setDataEnabled();
        this.card23=this.add.image(x5, row4y, imageData.giraffe.key).setDataEnabled();
        this.card24=this.add.image(x6, row4y, imageData.sloth.key).setDataEnabled();
        this.card25=this.add.image(x1,row5y,imageData.zebra.key).setDataEnabled();
        this.card26=this.add.image(x2, row5y, imageData.gorilla.key).setDataEnabled();
        this.card27=this.add.image(x3, row5y, imageData.monkey.key).setDataEnabled();
        this.card28=this.add.image(x4, row5y, imageData.pig.key).setDataEnabled();
        this.card29=this.add.image(x5, row5y, imageData.snake.key).setDataEnabled();
        this.card30=this.add.image(x6, row5y, imageData.hippo.key).setDataEnabled();
        this.card31=this.add.image(x1, row6y,imageData.penguin.key).setDataEnabled();
        this.card32=this.add.image(x2, row6y, imageData.narwhal.key).setDataEnabled();
        this.card33=this.add.image(x3, row6y, imageData.crocodile.key).setDataEnabled();
        this.card34=this.add.image(x4, row6y, imageData.snake.key).setDataEnabled();
        this.card35=this.add.image(x5, row6y, imageData.dog.key).setDataEnabled();
        this.card36=this.add.image(x6, row6y, imageData.cow.key).setDataEnabled();

        this.cardClickSet(this.card1);
        this.cardClickSet(this.card2);
        this.cardClickSet(this.card3);
        this.cardClickSet(this.card4);
        this.cardClickSet(this.card5);
        this.cardClickSet(this.card6);
        this.cardClickSet(this.card7);
        this.cardClickSet(this.card8);
        this.cardClickSet(this.card9);
        this.cardClickSet(this.card10);
        this.cardClickSet(this.card11);
        this.cardClickSet(this.card12);
        this.cardClickSet(this.card13);
        this.cardClickSet(this.card14);
        this.cardClickSet(this.card15);
        this.cardClickSet(this.card16);
        this.cardClickSet(this.card17);
        this.cardClickSet(this.card18);
        this.cardClickSet(this.card19);
        this.cardClickSet(this.card20);
        this.cardClickSet(this.card21);
        this.cardClickSet(this.card22);
        this.cardClickSet(this.card23);
        this.cardClickSet(this.card24);
        this.cardClickSet(this.card25);
        this.cardClickSet(this.card26);
        this.cardClickSet(this.card27);
        this.cardClickSet(this.card28);
        this.cardClickSet(this.card29);
        this.cardClickSet(this.card30);
        this.cardClickSet(this.card31);
        this.cardClickSet(this.card32);
        this.cardClickSet(this.card33);
        this.cardClickSet(this.card34);
        this.cardClickSet(this.card35);
        this.cardClickSet(this.card36);

        }

        //Makes cards interactive
        cardsEnabled(): void{
            this.card1.setInteractive();
            this.card2.setInteractive();
            this.card3.setInteractive();
            this.card4.setInteractive();
            this.card5.setInteractive();
            this.card6.setInteractive();
            this.card7.setInteractive();
            this.card8.setInteractive();
            this.card9.setInteractive();
            this.card10.setInteractive();
            this.card11.setInteractive();
            this.card12.setInteractive();
            this.card13.setInteractive();
            this.card14.setInteractive();
            this.card15.setInteractive();
            this.card16.setInteractive();
            this.card17.setInteractive();
            this.card18.setInteractive();
            this.card19.setInteractive();
            this.card20.setInteractive();
            this.card21.setInteractive();
            this.card22.setInteractive();
            this.card23.setInteractive();
            this.card24.setInteractive();
            this.card25.setInteractive();
            this.card26.setInteractive();
            this.card27.setInteractive();
            this.card28.setInteractive();
            this.card29.setInteractive();
            this.card30.setInteractive();
            this.card31.setInteractive();
            this.card32.setInteractive();
            this.card33.setInteractive();
            this.card34.setInteractive();
            this.card35.setInteractive();
            this.card36.setInteractive();

        }
        
        //Disables card interaction
        cardsDisabled():void{
               
            this.card1.disableInteractive();
            this.card2.disableInteractive();
            this.card3.disableInteractive();
            this.card4.disableInteractive();
            this.card5.disableInteractive();
            this.card6.disableInteractive();
            this.card7.disableInteractive();
            this.card8.disableInteractive();
            this.card9.disableInteractive();
            this.card10.disableInteractive();
            this.card11.disableInteractive();
            this.card12.disableInteractive();
            this.card13.disableInteractive();
            this.card14.disableInteractive();
            this.card15.disableInteractive();
            this.card16.disableInteractive();
            this.card17.disableInteractive();
            this.card18.disableInteractive();
            this.card19.disableInteractive();
            this.card20.disableInteractive();
            this.card21.disableInteractive();
            this.card22.disableInteractive();
            this.card23.disableInteractive();
            this.card24.disableInteractive();
            this.card25.disableInteractive();
            this.card26.disableInteractive();
            this.card27.disableInteractive();
            this.card28.disableInteractive();
            this.card29.disableInteractive();
            this.card30.disableInteractive();
            this.card31.disableInteractive();
            this.card32.disableInteractive();
            this.card33.disableInteractive();
            this.card34.disableInteractive();
            this.card35.disableInteractive();
            this.card36.disableInteractive();

        }
    }

    


export default GameScene;
