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
const beginShow=3000;
const matchShow=300;
const incorrectShow=300;


//Grid position variables
const row1y=300;
const yinc=150;

const x1=750;
const xinc=150;

//Win variable
let win=8;

const goodConfetti = new JSConfetti()
const badConfetti = new JSConfetti()

export class EasyGameScene extends BaseScene {

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
  

    constructor() {
        super(SceneType.Easy, false);
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

    update(): void {
        
        moves=tries+matches+1;
 
        //Min + 20 moves
        tier1=win+5;

        //Min +40 moves
        tier2=win+10

        //Min +41 moves or more
        tier3=win+11;
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

                    tries++;
                    self.addTries();
                    //Audio
                    var badSound = self.sound.add('bad');
                    badSound.play();

                    
                    
                    
                    setTimeout(() => 
                    { 
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
    

        this.matchesText = this.add.text(700, 1000, '< Matches: 0/8 >', 
        { 
            fontFamily: globalStyles.NiceSugarText.fontFamily,
            color: '#ffffff', 
            fontSize: '70px',
            align: 'center',
        });



        this.triesText = this.add.text(800, 15, 'Attempts: 0', 
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

        this.matchesText.setText("< Matches: " + matches.toString() +"/8 >");

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
        
        
        this.card1=this.add.image(x1, row1y, imageData.pig.key).setDataEnabled();
        this.card2=this.add.image(x1+(xinc*1), row1y, imageData.frog.key).setDataEnabled();
        this.card3=this.add.image(x1+(xinc*2), row1y, imageData.rhino.key).setDataEnabled();
        this.card4=this.add.image(x1+(xinc*3), row1y, imageData.elephant.key).setDataEnabled();
        
        this.card5=this.add.image(x1, row1y+(yinc*1), imageData.chicken.key).setDataEnabled();
        this.card6=this.add.image(x1+(xinc*1), row1y+(yinc*1), imageData.pig.key).setDataEnabled();
        this.card7=this.add.image(x1+(xinc*2), row1y+(yinc*1),imageData.parrot.key).setDataEnabled();
        this.card8=this.add.image(x1+(xinc*3), row1y+(yinc*1), imageData.chick.key).setDataEnabled();
        
        this.card9=this.add.image(x1,  row1y+(yinc*2), imageData.chicken.key).setDataEnabled();
        this.card10=this.add.image(x1+(xinc*1), row1y+(yinc*2) , imageData.chick.key).setDataEnabled();
        this.card11=this.add.image(x1+(xinc*2), row1y+(yinc*2), imageData.frog.key).setDataEnabled();
        this.card12=this.add.image(x1+(xinc*3), row1y+(yinc*2) , imageData.elephant.key).setDataEnabled();
        
        this.card13=this.add.image(x1, row1y+(yinc*3), imageData.rhino.key).setDataEnabled();
        this.card14=this.add.image(x1+(xinc*1), row1y+(yinc*3) , imageData.bear.key).setDataEnabled();
        this.card15=this.add.image(x1+(xinc*2), row1y+(yinc*3), imageData.parrot.key).setDataEnabled();
        this.card16=this.add.image(x1+(xinc*3),row1y+(yinc*3) , imageData.bear.key).setDataEnabled();
    

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
   
}

    



}



export default EasyGameScene;
