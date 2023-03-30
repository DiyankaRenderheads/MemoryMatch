import { SceneType } from "../data/sceneData";
import AppConfig from '../config/appConfig';
import { BaseScene } from "./BaseScene";
import globalStyles from "../data/globalStyles";
import imageData from "../data/imageData";
import soundData from "../data/soundData";
import { Sleeping } from "matter";

//How to use the Environment variables
const serverURL = process.env.SERVER_URL;

/**
 * Game Sccene 
 */

//Selected card variables
let selectedCard1;
let selectedCard2;

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

    constructor() {
        super(SceneType.Game, false);
    }

    preload(): void {
        super.preload();
    }

    create(): void {
        super.create();

        this.gridGenerator();
    }

    cardClickSet(img: Phaser.GameObjects.Image): void{
      
        img.data.set('animal',img.texture.key );
        img.setTexture(imageData.blank.key);

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
                if(selectedCard1.data.get('animal')==selectedCard2.data.get('animal'))
                {
                   
                    //figure out why the texutre only changes to hidden once
                    selectedCard1.setTexture(imageData.hidden.key);
                    selectedCard2.setTexture(imageData.hidden.key);
                    this.selectedCard1.setInteractive(false);
                    this.selectedCard2.setInteractive(false);
                    selectedCard1=null;
                    selectedCard2=null;
                   
                   
                }
                if(selectedCard1.data.get('animal')!=selectedCard2.data.get('animal'))
                {
                    //figure out delay before next event
                    //figure out why this only only works until you get one match right
                    selectedCard1.setTexture(imageData.blank.key);
                    selectedCard2.setTexture(imageData.blank.key);
                    selectedCard1=null;
                    selectedCard2=null;
                }
            }
            

            

        }
        );

        selectedCard1=null;
        selectedCard2=null;
    }

    makeBlankAgain():void{
        this.time.addEvent({
            delay: 5000,
        })
    }


    gridGenerator(): void{
        //6x6 grid data
        //row 1
        let card1=this.add.image(x1, row1y, imageData.narwhal.key);
        let card2=this.add.image(x2, row1y, imageData.zebra.key);
        let card3=this.add.image(x3, row1y, imageData.rabbit.key);
        let card4=this.add.image(x4, row1y, imageData.whale.key);
        let card5=this.add.image(x5, row1y, imageData.gorilla.key);
        let card6=this.add.image(x6, row1y, imageData.parrot.key);

        card1.setInteractive();
        card1.setDataEnabled();
        card2.setInteractive();
        card2.setDataEnabled();
        card3.setInteractive();
        card3.setDataEnabled();
        card4.setInteractive();
        card4.setDataEnabled();
        card5.setInteractive();
        card5.setDataEnabled();
        card6.setInteractive();
        card6.setDataEnabled();

        this.cardClickSet(card1);
        this.cardClickSet(card2);
        this.cardClickSet(card3);
        this.cardClickSet(card4);
        this.cardClickSet(card5);
        this.cardClickSet(card6);

        //row 2
        let card7=this.add.image(x1,row2y,imageData.cow.key);
        let card8=this.add.image(x2, row2y, imageData.duck.key);
        let card9=this.add.image(x3, row2y, imageData.owl.key);
        let card10=this.add.image(x4, row2y, imageData.crocodile.key);
        let card11=this.add.image(x5, row2y, imageData.sloth.key);
        let card12=this.add.image(x6, row2y, imageData.pig.key);

        card7.setInteractive();
        card7.setDataEnabled();
        card8.setInteractive();
        card8.setDataEnabled();
        card9.setInteractive();
        card9.setDataEnabled();
        card10.setInteractive();
        card10.setDataEnabled();
        card11.setInteractive();
        card11.setDataEnabled();
        card12.setInteractive();
        card12.setDataEnabled();

        this.cardClickSet(card7);
        this.cardClickSet(card8);
        this.cardClickSet(card9);
        this.cardClickSet(card10);
        this.cardClickSet(card11);
        this.cardClickSet(card12);

        //row 3
        let card13=this.add.image(x1, row3y, imageData.rabbit.key);
        let card14=this.add.image(x2, row3y, imageData.whale.key);
        let card15=this.add.image(x3, row3y, imageData.hippo.key);
        let card16=this.add.image(x4, row3y, imageData.giraffe.key);
        let card17=this.add.image(x5, row3y, imageData.penguin.key);
        let card18=this.add.image(x6, row3y, imageData.monkey.key);

        card13.setInteractive();
        card13.setDataEnabled();
        card14.setInteractive();
        card14.setDataEnabled();
        card15.setInteractive();
        card15.setDataEnabled();
        card16.setInteractive();
        card16.setDataEnabled();
        card17.setInteractive();
        card17.setDataEnabled();
        card18.setInteractive();
        card18.setDataEnabled();

        this.cardClickSet(card13);
        this.cardClickSet(card14);
        this.cardClickSet(card15);
        this.cardClickSet(card16);
        this.cardClickSet(card17);
        this.cardClickSet(card18);



        //row 4
        let card19=this.add.image(x1,row4y,imageData.dog.key);
        let card20=this.add.image(x2, row4y, imageData.owl.key);
        let card21=this.add.image(x3, row4y, imageData.duck.key);
        let card22=this.add.image(x4, row4y, imageData.parrot.key);
        let card23=this.add.image(x5, row4y, imageData.giraffe.key);
        let card24=this.add.image(x6, row4y, imageData.sloth.key);

        card19.setInteractive();
        card19.setDataEnabled();
        card20.setInteractive();
        card20.setDataEnabled();
        card21.setInteractive();
        card21.setDataEnabled();
        card22.setInteractive();
        card22.setDataEnabled();
        card23.setInteractive();
        card23.setDataEnabled();
        card24.setInteractive();
        card24.setDataEnabled();

        this.cardClickSet(card19);
        this.cardClickSet(card20);
        this.cardClickSet(card21);
        this.cardClickSet(card22);
        this.cardClickSet(card23);
        this.cardClickSet(card24);

        //row 5
        let card25=this.add.image(x1,row5y,imageData.zebra.key);
        let card26=this.add.image(x2, row5y, imageData.gorilla.key);
        let card27=this.add.image(x3, row5y, imageData.monkey.key);
        let card28=this.add.image(x4, row5y, imageData.pig.key);
        let card29=this.add.image(x5, row5y, imageData.snake.key);
        let card30=this.add.image(x6, row5y, imageData.hippo.key);

        card25.setInteractive();
        card25.setDataEnabled();
        card26.setInteractive();
        card26.setDataEnabled();
        card27.setInteractive();
        card27.setDataEnabled();
        card28.setInteractive();
        card28.setDataEnabled();
        card29.setInteractive();
        card29.setDataEnabled();
        card30.setInteractive();
        card30.setDataEnabled();

        this.cardClickSet(card25);
        this.cardClickSet(card26);
        this.cardClickSet(card27);
        this.cardClickSet(card28);
        this.cardClickSet(card29);
        this.cardClickSet(card30);


        //row 6
        let card31=this.add.image(x1, row6y,imageData.penguin.key);
        let card32=this.add.image(x2, row6y, imageData.narwhal.key);
        let card33=this.add.image(x3, row6y, imageData.crocodile.key);
        let card34=this.add.image(x4, row6y, imageData.snake.key);
        let card35=this.add.image(x5, row6y, imageData.dog.key);
        let card36=this.add.image(x6, row6y, imageData.cow.key);

        card31.setInteractive();
        card31.setDataEnabled();
        card32.setInteractive();
        card32.setDataEnabled();
        card33.setInteractive();
        card33.setDataEnabled();
        card34.setInteractive();
        card34.setDataEnabled();
        card35.setInteractive();
        card35.setDataEnabled();
        card36.setInteractive();
        card36.setDataEnabled();

        this.cardClickSet(card31);
        this.cardClickSet(card32);
        this.cardClickSet(card33);
        this.cardClickSet(card34);
        this.cardClickSet(card35);
        this.cardClickSet(card36);
    }
}

export default GameScene;
