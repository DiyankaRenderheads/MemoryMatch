import { SceneType } from "../data/sceneData";
import AppConfig from '../config/appConfig';
import { BaseScene } from "./BaseScene";
import globalStyles from "../data/globalStyles";
import imageData from "../data/imageData";
import soundData from "../data/soundData";
import { Sleeping } from "matter";
import fontData from "../data/fontData";
import JSConfetti from 'js-confetti'

//How to use the Environment variables
const serverURL = process.env.SERVER_URL;

let scale=0.75;

//Selected card variables
let selectedCard1: Phaser.GameObjects.Image;
let selectedCard2: Phaser.GameObjects.Image;

//Matches, tries  and score tier variables
let matches=0;
let tries=0;
let moves=0;
let tier1=0;
let tier2=0;
let tier3=0;

//Time variables
const beginShow=9000;
const matchShow=1000;
const incorrectShow=1000;


//Grid position variables
const row1y=140;
const yinc=110;

const x1=600;
const xinc=110;

//Win variable
let win=32;

const goodConfetti = new JSConfetti()
const badConfetti = new JSConfetti()


function disableInteractionOnNonDestroyedObjects(scene: Phaser.Scene) {
const nonDestroyedObjects = scene.children.getChildren().filter(obj => obj && obj.active);
nonDestroyedObjects.forEach(obj => {
    if (obj.input) {
    obj.input.enabled = false;
    }
});
}

function enableInteractionOnNonDestroyedObjects(scene: Phaser.Scene) {
const nonDestroyedObjects = scene.children.getChildren().filter(obj => obj && obj.active);
nonDestroyedObjects.forEach(obj => {
    if (obj.input) {
    obj.input.enabled = true;
    }
});
}

export class HardGameScene extends BaseScene {

    private startTime: number;
    private timer: Phaser.Time.TimerEvent;
    private clock: Phaser.GameObjects.Image;

    private timerText: Phaser.GameObjects.Text;
    private timerTextPopL: Phaser.GameObjects.Text;
    private timerTextPopR: Phaser.GameObjects.Text;
    private finishedTimeText: Phaser.GameObjects.Text;

    private waitGoText1: Phaser.GameObjects.Text;
    private waitGoText2: Phaser.GameObjects.Text;

    private matchesText: Phaser.GameObjects.Text;
   
    private triesText: Phaser.GameObjects.Text;
    private triesPopL: Phaser.GameObjects.Text;
    private triesPopR: Phaser.GameObjects.Text;

    private winBannerText: Phaser.GameObjects.Text;
    private winDetailsText: Phaser.GameObjects.Text;
    private starsText: Phaser.GameObjects.Text;
    private star: Phaser.GameObjects.Image;


    private restartButton: Phaser.GameObjects.Image;
    private restartButtonPopL: Phaser.GameObjects.Text;
    private restartButtonPopR: Phaser.GameObjects.Text;

    private backButton: Phaser.GameObjects.Image;
    private backButtonPopL: Phaser.GameObjects.Text;
    private backButtonPopR: Phaser.GameObjects.Text;

    private winBanner: Phaser.GameObjects.Image;


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
    private card37: Phaser.GameObjects.Image;
    private card38: Phaser.GameObjects.Image;
    private card39: Phaser.GameObjects.Image;
    private card40: Phaser.GameObjects.Image;
    private card41: Phaser.GameObjects.Image;
    private card42: Phaser.GameObjects.Image;
    private card43: Phaser.GameObjects.Image;
    private card44: Phaser.GameObjects.Image;
    private card45: Phaser.GameObjects.Image;
    private card46: Phaser.GameObjects.Image;
    private card47: Phaser.GameObjects.Image;
    private card48: Phaser.GameObjects.Image;
    private card49: Phaser.GameObjects.Image;
    private card50: Phaser.GameObjects.Image;
    private card51: Phaser.GameObjects.Image;
    private card52: Phaser.GameObjects.Image;
    private card53: Phaser.GameObjects.Image;
    private card54: Phaser.GameObjects.Image;
    private card55: Phaser.GameObjects.Image;
    private card56: Phaser.GameObjects.Image;
    private card57: Phaser.GameObjects.Image;
    private card58: Phaser.GameObjects.Image;
    private card59: Phaser.GameObjects.Image;
    private card60: Phaser.GameObjects.Image;
    private card61: Phaser.GameObjects.Image;
    private card62: Phaser.GameObjects.Image;
    private card63: Phaser.GameObjects.Image;
    private card64: Phaser.GameObjects.Image;

    constructor() {
        super(SceneType.Hard, false);
    }

    preload(): void {
        super.preload();

        //Audio Load
        this.load.audio('click', 'src/assets/sounds/ClickSound.mp3');
        this.load.audio('good','src/assets/sounds/GoodSound.mp3');
        this.load.audio('bad','src/assets/sounds/BadSound.mp3');
        this.load.audio('go','src/assets/sounds/GoSound.mp3');
        this.load.audio('complete','src/assets/sounds/CompleteSound.mp3');
    }

    create(): void {
        super.create();

        this.gridGenerator();
        this.UIgenerator();
        this.cardsDisabled();


        //UI stuff
        this.waitGoText1=this.add.text(150, 500, 'Wait...', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '70px', 
            align: 'center',
        });
        this.waitGoText2=this.add.text(1550, 500, 'Wait...', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '70px', 
            align: 'center',
        });

    

        this.time.delayedCall(beginShow, this.startTimer, [], this);
        
    
        
        //UI stuff
        setTimeout(() => 
        { 
            this.waitGoText1.setText('<Go>!');
            this.waitGoText2.setText('<Go>!');
        
            var  goSound = this.sound.add('go');
            goSound.play();

        },beginShow);

            
            
        setTimeout(() => 
        { 
            this.waitGoText1.setText('');
            this.waitGoText2.setText('');
        },beginShow+5000);

    }

  
    //Scoring stuff implemented here
    update(): void {
        
        moves=tries+matches+1;
 
        //Min +30 moves
        tier1=win+30;

        //Min +60 moves
        tier2=win+60

        //Min +61 moves or more
        tier3=win+61;

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
            //Audio
            var clickSound = self.sound.add('click');
            clickSound.play();
           
            img.setTexture(img.data.get('animal'));

            if(selectedCard1==null)
            {
                selectedCard1=img;
            }
            else if(selectedCard1!=null && selectedCard2==null)
            {
                selectedCard2=img;  

                //Check if player clicked on the same card twice 
                if(selectedCard1==selectedCard2){
                    selectedCard2=null;
                }

                //Cards match
                if(selectedCard1.data.get('animal')==selectedCard2.data.get('animal'))
                {
                    disableInteractionOnNonDestroyedObjects(this.scene);
                    matches++;
                    self.addMatches();
                   
                    //Audio
                    var goodSound = self.sound.add('good');
                    goodSound.play();
                  
                    //Confetti
                    goodConfetti.addConfetti(
                        {
                            confettiNumber:400,
                            confettiRadius:7,
                        }
                    );

                    setTimeout(() => 
                    { 
                        enableInteractionOnNonDestroyedObjects(this.scene);
                        selectedCard1.setTexture(imageData.hidden.key);
                        selectedCard2.setTexture(imageData.hidden.key);
                        selectedCard1.disableInteractive();
                        selectedCard2.disableInteractive();
                        selectedCard1.destroy();
                        selectedCard2.destroy();
                        selectedCard1=null;
                        selectedCard2=null;
                    
                    },  matchShow);
                    
                    
  

                }

                //Cards don't match 
                if(selectedCard1.data.get('animal')!=selectedCard2.data.get('animal'))
                {
                    disableInteractionOnNonDestroyedObjects(this.scene);
                    tries++;
                    self.addTries();
                    //Audio
                    var badSound = self.sound.add('bad');
                    badSound.play();

                    
                    
                    
                    setTimeout(() => 
                    { 
                        enableInteractionOnNonDestroyedObjects(this.scene);
                        selectedCard1.setTexture(imageData.blank.key);
                        selectedCard2.setTexture(imageData.blank.key);
                        selectedCard1=null;
                        selectedCard2=null;
                    }, incorrectShow);
                
                }
            }
            

       
            else if(selectedCard1!=null && selectedCard2!=null)
            {
     
            }
         
        }
        );
       
}



    //Generates the UI for the matches/tries/time
    UIgenerator():void{

        //Audio
        var clickSound2 = this.sound.add('click');
    

        this.matchesText = this.add.text(700, 1000, '< Matches: 0/32 >', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '70px',
            align: 'center',
        });



        this.triesText = this.add.text(850, 15, 'Attempts: 0', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '50px', 
            align: 'center',
        });
        this.triesText.setInteractive();
        this.triesPopL=this.add.text(770, 15, '', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '50px',
            align: 'center',
        });
        this.triesPopR=this.add.text(1120, 15, '', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '50px',
            align: 'center',
        });

        this.triesText.on('pointerover', () => {
            this.triesPopL.setText('<');
            this.triesPopR.setText('>');
        });
          
        this.triesText.on('pointerout', () => {
            this.triesPopL.setText('');
            this.triesPopR.setText('');
        });



        
        this.timerText = this.add.text(120, 20, 'Time: 00:00', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '50px', 
            align: 'center',
        });
        this.timerText.setInteractive();
        this.clock=this.add.image(50,45, imageData.clock.key);
        this.clock.setScale(.75);
        this.timerTextPopL=this.add.text(100, 20, '', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '50px', 
            align: 'center',
        });
        this.timerTextPopR=this.add.text(420, 20, '', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '50px', 
            align: 'center',
        });
        this.timerText.on('pointerover', () => {
            this.timerTextPopL.setText('<');
            this.timerTextPopR.setText('>');
        });
          
        this.timerText.on('pointerout', () => {
            this.timerTextPopL.setText('');
            this.timerTextPopR.setText('');
        });
        this.finishedTimeText = this.add.text(900, 600, '00:00', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#00000000', 
            fontSize: '50px', 
            align: 'center',

        });
        this.finishedTimeText.setDepth(100);



        this.backButton=this.add.image(1820,50, imageData.back.key);
        this.backButton.setInteractive();
        this.backButtonPopL=this.add.text(1750, 10, '', 
        {
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '60px', 
            align: 'center',
        });
        this.backButtonPopR=this.add.text(1870, 10, '', 
        {
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '60px', 
            align: 'center',
        });

        this.backButton.on('pointerover', () => {
          this.backButtonPopL.setText('<');
          this.backButtonPopR.setText('>');
        });
          
        this.backButton.on('pointerout', () => {
          this.backButtonPopL.setText('');
          this.backButtonPopR.setText('');
        });
        
        this.backButton.on('pointerdown', () =>  clickSound2.play());
        this.backButton.on('pointerdown', () =>  AppConfig.SceneManager.loadMenuScene(this.scene));


        this.restartButton=this.add.image(1840,1020, imageData.restart.key);
        this.restartButton.setScale(.5);
        this.restartButton.setTint(0xC62940);
        this.restartButton.setInteractive();
        this.restartButtonPopL=this.add.text(1780, 990, '', 
        {
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '60px', 
            align: 'center',
        });
        this.restartButtonPopR=this.add.text(1880, 990, '', 
        {
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '60px', 
            align: 'center',
        });

        
        this.restartButton.on('pointerover', () => {
            this.restartButtonPopL.setText('<');
            this.restartButtonPopR.setText('>');
          });
            
        this.restartButton.on('pointerout', () => {
            this.restartButtonPopL.setText('');
            this.restartButtonPopR.setText('');
          });
        this.restartButton.on('pointerdown', () =>  clickSound2.play());
        this.restartButton.on('pointerdown', () => this.restartScene());

      
}   
    
    restartScene() {
    // Restart the scene
    tries=0;
    matches=0;
    moves=0;
    tier1=0;
    tier2=0;
    tier3=0;
    this.scene.restart();
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
    this.finishedTimeText.setText(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

}



    //Adds +1 to score if cards match
    addMatches() {

        this.matchesText.setText("< Matches: " + matches.toString() +"/32 >");

        if(matches>=win)
        {
            console.log('You Win!');
            this.timer.remove(false);
            this.cardsDisabled();
            this.gameOver();
        }
}

    //Adds +1 to tries if cards don't match
    addTries() :void{

        this.triesText.setText("Attempts: " + tries.toString());
        
}

    //Shows game is over (and won)
    gameOver():void{

        //Audio
        var  completeSound = this.sound.add('complete');
        completeSound.play();

        this.winBanner=this.add.image(960,540,imageData.banner.key);
        this.starsText = this.add.text(820, 350,'You got x stars!', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#555555', 
            fontSize: '40px', 
            align: 'center',
        });
        this.winBannerText = this.add.text(700, 400,'< You Win! >', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#555555', 
            fontSize: '100px', 
            align: 'center',
        });
        this.winDetailsText = this.add.text(230, 540,'Good job! You found all ' + win.toString() +' matches in a total of '
        + moves.toString() +' moves in',
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#555555', 
            fontSize: '50px', 
            align: 'center',
        });

        this.finishedTimeText.setColor('#555555');


        //Star and tiering score 
        if(moves<=tier1)
        {
            this.starsText.setText('You got 3 stars!');
            this.star=this.add.image(980,515,imageData.threeStar.key);
            this.star.setScale(0.1,0.1);
            this.star.setTint(0xF2C400);
        }
       
        else if(moves<=tier2 && moves>tier1)
        {
            this.starsText.setText('You got 2 stars!');
            this.star=this.add.image(980,515,imageData.twoStar.key);
            this.star.setScale(0.15,0.15);
            this.star.setTint(0xF2C400);
        }

        else if(moves>=tier3)
        {
            this.starsText.setText('You got 1 star!');
            this.star=this.add.image(980,515,imageData.oneStar.key);
            this.star.setScale(0.3,0.3);
            this.star.setTint(0xF2C400);
        }
}


    
    //Generates grid, sets cards image texture key and position
    gridGenerator(): void{
        
        this.card1=this.add.image(x1, row1y, imageData.parrot.key).setDataEnabled();
        this.card2=this.add.image(x1+(xinc*1), row1y, imageData.chicken.key).setDataEnabled();
        this.card3=this.add.image(x1+(xinc*2), row1y, imageData.sloth.key).setDataEnabled();
        this.card4=this.add.image(x1+(xinc*3), row1y, imageData.crocodile.key).setDataEnabled();
        this.card5=this.add.image(x1+(xinc*4), row1y, imageData.chick.key).setDataEnabled();
        this.card6=this.add.image(x1+(xinc*5), row1y, imageData.moose.key).setDataEnabled();
        this.card7=this.add.image(x1+(xinc*6), row1y,imageData.parrot.key).setDataEnabled();
        this.card8=this.add.image(x1+(xinc*7), row1y, imageData.frog.key).setDataEnabled();
        
        this.card9=this.add.image(x1,  row1y+(yinc*1), imageData.snake.key).setDataEnabled();
        this.card10=this.add.image(x1+(xinc*1), row1y+(yinc*1), imageData.sloth.key).setDataEnabled();
        this.card11=this.add.image(x1+(xinc*2), row1y+(yinc*1), imageData.pig.key).setDataEnabled();
        this.card12=this.add.image(x1+(xinc*3), row1y+(yinc*1), imageData.gorilla.key).setDataEnabled();
        this.card13=this.add.image(x1+(xinc*4), row1y+(yinc*1), imageData.hippo.key).setDataEnabled();
        this.card14=this.add.image(x1+(xinc*5), row1y+(yinc*1), imageData.zebra.key).setDataEnabled();
        this.card15=this.add.image(x1+(xinc*6), row1y+(yinc*1), imageData.owl.key).setDataEnabled();
        this.card16=this.add.image(x1+(xinc*7), row1y+(yinc*1), imageData.parrot.key).setDataEnabled();
        
        this.card17=this.add.image(x1, row1y+(yinc*2), imageData.horse.key).setDataEnabled();
        this.card18=this.add.image(x1+(xinc*1), row1y+(yinc*2), imageData.buffalo.key).setDataEnabled();
        this.card19=this.add.image(x1+(xinc*2), row1y+(yinc*2), imageData.pig.key).setDataEnabled();
        this.card20=this.add.image(x1+(xinc*3), row1y+(yinc*2), imageData.rhino.key).setDataEnabled();
        this.card21=this.add.image(x1+(xinc*4), row1y+(yinc*2), imageData.rabbit.key).setDataEnabled();
        this.card22=this.add.image(x1+(xinc*5), row1y+(yinc*2), imageData.owl.key).setDataEnabled();
        this.card23=this.add.image(x1+(xinc*6), row1y+(yinc*2), imageData.elephant.key).setDataEnabled();
        this.card24=this.add.image(x1+(xinc*7),  row1y+(yinc*2), imageData.monkey.key).setDataEnabled();

        this.card25=this.add.image(x1, row1y+(yinc*3), imageData.giraffe.key).setDataEnabled();
        this.card26=this.add.image(x1+(xinc*1), row1y+(yinc*3), imageData.penguin.key).setDataEnabled();
        this.card27=this.add.image(x1+(xinc*2), row1y+(yinc*3), imageData.goat.key).setDataEnabled();
        this.card28=this.add.image(x1+(xinc*3), row1y+(yinc*3), imageData.penguin.key).setDataEnabled();
        this.card29=this.add.image(x1+(xinc*4), row1y+(yinc*3), imageData.buffalo.key).setDataEnabled();
        this.card30=this.add.image(x1+(xinc*5), row1y+(yinc*3), imageData.crocodile.key).setDataEnabled();
        this.card31=this.add.image(x1+(xinc*6), row1y+(yinc*3),imageData.elephant.key).setDataEnabled();
        this.card32=this.add.image(x1+(xinc*7), row1y+(yinc*3), imageData.crocodile.key).setDataEnabled();

        this.card33=this.add.image(x1, row1y+(yinc*4), imageData.duck.key).setDataEnabled();
        this.card34=this.add.image(x1+(xinc*1), row1y+(yinc*4), imageData.panda.key).setDataEnabled();
        this.card35=this.add.image(x1+(xinc*2), row1y+(yinc*4), imageData.gorilla.key).setDataEnabled();
        this.card36=this.add.image(x1+(xinc*3), row1y+(yinc*4), imageData.duck.key).setDataEnabled();
        this.card37=this.add.image(x1+(xinc*4), row1y+(yinc*4), imageData.bear.key).setDataEnabled();
        this.card38=this.add.image(x1+(xinc*5), row1y+(yinc*4), imageData.giraffe.key).setDataEnabled();
        this.card39=this.add.image(x1+(xinc*6), row1y+(yinc*4), imageData.narwhal.key).setDataEnabled();
        this.card40=this.add.image(x1+(xinc*7), row1y+(yinc*4), imageData.whale.key).setDataEnabled();

        
        this.card41=this.add.image(x1, row1y+(yinc*5), imageData.narwhal.key).setDataEnabled();
        this.card42=this.add.image(x1+(xinc*1), row1y+(yinc*5), imageData.chick.key).setDataEnabled();
        this.card43=this.add.image(x1+(xinc*2), row1y+(yinc*5), imageData.frog.key).setDataEnabled();
        this.card44=this.add.image(x1+(xinc*3), row1y+(yinc*5), imageData.cow.key).setDataEnabled();
        this.card45=this.add.image(x1+(xinc*4), row1y+(yinc*5), imageData.cow.key).setDataEnabled();
        this.card46=this.add.image(x1+(xinc*5), row1y+(yinc*5), imageData.parrot.key).setDataEnabled();
        this.card47=this.add.image(x1+(xinc*6), row1y+(yinc*5), imageData.chicken.key).setDataEnabled();
        this.card48=this.add.image(x1+(xinc*7), row1y+(yinc*5), imageData.goat.key).setDataEnabled();

        this.card49=this.add.image(x1, row1y+(yinc*6), imageData.whale.key).setDataEnabled();
        this.card50=this.add.image(x1+(xinc*1), row1y+(yinc*6), imageData.hippo.key).setDataEnabled();
        this.card51=this.add.image(x1+(xinc*2), row1y+(yinc*6), imageData.bear.key).setDataEnabled();
        this.card52=this.add.image(x1+(xinc*3), row1y+(yinc*6), imageData.dog.key).setDataEnabled();
        this.card53=this.add.image(x1+(xinc*4), row1y+(yinc*6), imageData.monkey.key).setDataEnabled();
        this.card54=this.add.image(x1+(xinc*5), row1y+(yinc*6), imageData.zebra.key).setDataEnabled();
        this.card55=this.add.image(x1+(xinc*6), row1y+(yinc*6), imageData.rabbit.key).setDataEnabled();
        this.card56=this.add.image(x1+(xinc*7), row1y+(yinc*6), imageData.snake.key).setDataEnabled();

        this.card57=this.add.image(x1, row1y+(yinc*7), imageData.horse.key).setDataEnabled();
        this.card58=this.add.image(x1+(xinc*1), row1y+(yinc*7), imageData.rhino.key).setDataEnabled();
        this.card59=this.add.image(x1+(xinc*2), row1y+(yinc*7), imageData.panda.key).setDataEnabled();
        this.card60=this.add.image(x1+(xinc*3), row1y+(yinc*7), imageData.walrus.key).setDataEnabled();
        this.card61=this.add.image(x1+(xinc*4), row1y+(yinc*7), imageData.dog.key).setDataEnabled();
        this.card62=this.add.image(x1+(xinc*5), row1y+(yinc*7), imageData.walrus.key).setDataEnabled();
        this.card63=this.add.image(x1+(xinc*6), row1y+(yinc*7), imageData.moose.key).setDataEnabled();
        this.card64=this.add.image(x1+(xinc*7), row1y+(yinc*7), imageData.crocodile.key).setDataEnabled();


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
        this.cardClickSet(this.card37);
        this.cardClickSet(this.card38);
        this.cardClickSet(this.card39);
        this.cardClickSet(this.card40);
        this.cardClickSet(this.card41);
        this.cardClickSet(this.card42);
        this.cardClickSet(this.card43);
        this.cardClickSet(this.card44);
        this.cardClickSet(this.card45);
        this.cardClickSet(this.card46);
        this.cardClickSet(this.card47);
        this.cardClickSet(this.card48);
        this.cardClickSet(this.card49);
        this.cardClickSet(this.card50);
        this.cardClickSet(this.card51);
        this.cardClickSet(this.card52);
        this.cardClickSet(this.card53);
        this.cardClickSet(this.card54);
        this.cardClickSet(this.card55);
        this.cardClickSet(this.card56);
        this.cardClickSet(this.card57);
        this.cardClickSet(this.card58);
        this.cardClickSet(this.card59);
        this.cardClickSet(this.card60);
        this.cardClickSet(this.card61);
        this.cardClickSet(this.card62);
        this.cardClickSet(this.card63);
        this.cardClickSet(this.card64);

        this.card1.setScale(scale);
        this.card2.setScale(scale);
        this.card3.setScale(scale);
        this.card4.setScale(scale);
        this.card5.setScale(scale);
        this.card6.setScale(scale);
        this.card7.setScale(scale);
        this.card8.setScale(scale);
        this.card9.setScale(scale);
        this.card10.setScale(scale);
        this.card11.setScale(scale);
        this.card12.setScale(scale);
        this.card13.setScale(scale);
        this.card14.setScale(scale);
        this.card15.setScale(scale);
        this.card16.setScale(scale);
        this.card17.setScale(scale);
        this.card18.setScale(scale);
        this.card19.setScale(scale);
        this.card20.setScale(scale);
        this.card21.setScale(scale);
        this.card22.setScale(scale);
        this.card23.setScale(scale);
        this.card24.setScale(scale);
        this.card25.setScale(scale);
        this.card26.setScale(scale);
        this.card27.setScale(scale);
        this.card28.setScale(scale);
        this.card29.setScale(scale);
        this.card30.setScale(scale);
        this.card31.setScale(scale);
        this.card32.setScale(scale);
        this.card33.setScale(scale);
        this.card34.setScale(scale);
        this.card35.setScale(scale);
        this.card36.setScale(scale);
        this.card37.setScale(scale);
        this.card38.setScale(scale);
        this.card39.setScale(scale);
        this.card40.setScale(scale);
        this.card41.setScale(scale);
        this.card42.setScale(scale);
        this.card43.setScale(scale);
        this.card44.setScale(scale);
        this.card45.setScale(scale);
        this.card46.setScale(scale);
        this.card47.setScale(scale);
        this.card48.setScale(scale);
        this.card49.setScale(scale);
        this.card50.setScale(scale);
        this.card51.setScale(scale);
        this.card52.setScale(scale);
        this.card53.setScale(scale);
        this.card54.setScale(scale);
        this.card55.setScale(scale);
        this.card56.setScale(scale);
        this.card57.setScale(scale);
        this.card58.setScale(scale);
        this.card59.setScale(scale);
        this.card60.setScale(scale);
        this.card61.setScale(scale);
        this.card62.setScale(scale);
        this.card63.setScale(scale);
        this.card64.setScale(scale);


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
    this.card37.setInteractive();
    this.card38.setInteractive();
    this.card39.setInteractive();
    this.card40.setInteractive();
    this.card41.setInteractive();
    this.card42.setInteractive();
    this.card43.setInteractive();
    this.card44.setInteractive();
    this.card45.setInteractive();
    this.card46.setInteractive();
    this.card47.setInteractive();
    this.card48.setInteractive();
    this.card49.setInteractive();
    this.card50.setInteractive();
    this.card51.setInteractive();
    this.card52.setInteractive();
    this.card53.setInteractive();
    this.card54.setInteractive();
    this.card55.setInteractive();
    this.card56.setInteractive();
    this.card57.setInteractive();
    this.card58.setInteractive();
    this.card59.setInteractive();
    this.card60.setInteractive();
    this.card61.setInteractive();
    this.card62.setInteractive();
    this.card63.setInteractive();
    this.card64.setInteractive();   

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
    this.card37.disableInteractive();
    this.card38.disableInteractive();
    this.card39.disableInteractive();
    this.card40.disableInteractive();
    this.card41.disableInteractive();
    this.card42.disableInteractive();
    this.card43.disableInteractive();
    this.card44.disableInteractive();
    this.card45.disableInteractive();
    this.card46.disableInteractive();
    this.card47.disableInteractive();
    this.card48.disableInteractive();
    this.card49.disableInteractive();
    this.card50.disableInteractive();
    this.card51.disableInteractive();
    this.card52.disableInteractive();
    this.card53.disableInteractive();
    this.card54.disableInteractive();
    this.card55.disableInteractive();
    this.card56.disableInteractive();
    this.card57.disableInteractive();
    this.card58.disableInteractive();
    this.card59.disableInteractive();
    this.card60.disableInteractive();
    this.card61.disableInteractive();
    this.card62.disableInteractive();
    this.card63.disableInteractive();
    this.card64.disableInteractive();
}



}



export default HardGameScene;
