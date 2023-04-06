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
const beginShow=5000;
const matchShow=1000;
const incorrectShow=500;


//Grid position variables
const row1y=160;
const yinc=150;

const x1=600;
const xinc=150;

//Win variable
let win=18;

const goodConfetti = new JSConfetti()
const badConfetti = new JSConfetti()

export class MediumGameScene extends BaseScene {

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
    private starL: Phaser.GameObjects.Image;
    private starR: Phaser.GameObjects.Image;

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



    constructor() {
        super(SceneType.Medium, false);
    }

    preload(): void {
        super.preload();

        //Audio Load
        this.load.audio('click', 'src/assets/sounds/ClickSound.mp3');
        this.load.audio('good','src/assets/sounds/GoodSound.mp3');
        this.load.audio('bad','src/assets/sounds/BadSound.mp3');
    }

    create(): void {
        
        super.create();
        this.gridGenerator();
        this.UIgenerator();
        this.cardsDisabled();
        //this.gameOver();

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
        
        //10 moves
        tier1=win+10;

        //20 moves
        tier2=win+20

        //Anything greater than 20
        tier3=win+21;


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
                    self.cardsDisabled();
                    //Audio
                    var badSound = self.sound.add('bad');
                    badSound.play();

                    setTimeout(() => 
                    { 
                    selectedCard1.setTint(0xffffff);
                    selectedCard2.setTint(0xffffff);
                    selectedCard1.setTexture(imageData.blank.key);
                    selectedCard2.setTexture(imageData.blank.key);
                    selectedCard1=null;
                    selectedCard2=null;
                        self.cardsEnabled();
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
    

        this.matchesText = this.add.text(700, 1000, '< Matches: 0/18 >', 
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

        this.matchesText.setText("< Matches: " + matches.toString() +"/18 >");

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

        this.winBanner=this.add.image(960,540,imageData.banner.key);
        this.starsText = this.add.text(800, 350,'You got x stars!', 
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

        }
       
        else if(moves<=tier2)
        {

        }

        else if(moves>=tier3)
        {

        }
}


    
    //Generates grid, sets cards image texture key and position
    gridGenerator(): void{
        
        
        this.card1=this.add.image(x1, row1y, imageData.narwhal.key).setDataEnabled();
        this.card2=this.add.image(x1+(xinc*1), row1y, imageData.zebra.key).setDataEnabled();
        this.card3=this.add.image(x1+(xinc*2), row1y, imageData.rabbit.key).setDataEnabled();
        this.card4=this.add.image(x1+(xinc*3), row1y, imageData.whale.key).setDataEnabled();
        this.card5=this.add.image(x1+(xinc*4), row1y, imageData.gorilla.key).setDataEnabled();
        this.card6=this.add.image(x1+(xinc*5), row1y, imageData.parrot.key).setDataEnabled();

        this.card7=this.add.image(x1, row1y+(yinc*1),imageData.cow.key).setDataEnabled();
        this.card8=this.add.image(x1+(xinc*1), row1y+(yinc*1), imageData.duck.key).setDataEnabled();
        this.card9=this.add.image(x1+(xinc*2), row1y+(yinc*1), imageData.owl.key).setDataEnabled();
        this.card10=this.add.image(x1+(xinc*3),row1y+(yinc*1) , imageData.crocodile.key).setDataEnabled();
        this.card11=this.add.image(x1+(xinc*4), row1y+(yinc*1), imageData.sloth.key).setDataEnabled();
        this.card12=this.add.image(x1+(xinc*5),row1y+(yinc*1) , imageData.pig.key).setDataEnabled();
        
        this.card13=this.add.image(x1,row1y+(yinc*2), imageData.rabbit.key).setDataEnabled();
        this.card14=this.add.image(x1+(xinc*1),row1y+(yinc*2) , imageData.whale.key).setDataEnabled();
        this.card15=this.add.image(x1+(xinc*2), row1y+(yinc*2), imageData.hippo.key).setDataEnabled();
        this.card16=this.add.image(x1+(xinc*3),row1y+(yinc*2) , imageData.giraffe.key).setDataEnabled();
        this.card17=this.add.image(x1+(xinc*4), row1y+(yinc*2), imageData.penguin.key).setDataEnabled();
        this.card18=this.add.image(x1+(xinc*5),row1y+(yinc*2), imageData.monkey.key).setDataEnabled();

        this.card19=this.add.image(x1,row1y+(yinc*3),imageData.dog.key).setDataEnabled();
        this.card20=this.add.image(x1+(xinc*1),row1y+(yinc*3) , imageData.owl.key).setDataEnabled();
        this.card21=this.add.image(x1+(xinc*2),row1y+(yinc*3) , imageData.duck.key).setDataEnabled();
        this.card22=this.add.image(x1+(xinc*3), row1y+(yinc*3), imageData.parrot.key).setDataEnabled();
        this.card23=this.add.image(x1+(xinc*4),row1y+(yinc*3) , imageData.giraffe.key).setDataEnabled();
        this.card24=this.add.image(x1+(xinc*5), row1y+(yinc*3), imageData.sloth.key).setDataEnabled();

        this.card25=this.add.image(x1,row1y+(yinc*4),imageData.zebra.key).setDataEnabled();
        this.card26=this.add.image(x1+(xinc*1), row1y+(yinc*4), imageData.gorilla.key).setDataEnabled();
        this.card27=this.add.image(x1+(xinc*2), row1y+(yinc*4), imageData.monkey.key).setDataEnabled();
        this.card28=this.add.image(x1+(xinc*3), row1y+(yinc*4), imageData.pig.key).setDataEnabled();
        this.card29=this.add.image(x1+(xinc*4), row1y+(yinc*4), imageData.snake.key).setDataEnabled();
        this.card30=this.add.image(x1+(xinc*5), row1y+(yinc*4), imageData.hippo.key).setDataEnabled();

        this.card31=this.add.image(x1, row1y+(yinc*5),imageData.penguin.key).setDataEnabled();
        this.card32=this.add.image(x1+(xinc*1), row1y+(yinc*5), imageData.narwhal.key).setDataEnabled();
        this.card33=this.add.image(x1+(xinc*2), row1y+(yinc*5), imageData.crocodile.key).setDataEnabled();
        this.card34=this.add.image(x1+(xinc*3), row1y+(yinc*5), imageData.snake.key).setDataEnabled();
        this.card35=this.add.image(x1+(xinc*4), row1y+(yinc*5), imageData.dog.key).setDataEnabled();
        this.card36=this.add.image(x1+(xinc*5), row1y+(yinc*5), imageData.cow.key).setDataEnabled();

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

    


export default MediumGameScene;
