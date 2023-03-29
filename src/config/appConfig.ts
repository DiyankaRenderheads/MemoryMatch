//import manager classes

import ImageManager from "../managers/ImageManager";
import SceneManager from "../managers/SceneManager";
import SoundManager from "../managers/SoundManager";

export default class AppConfig {


    /**
     * Manages the loading, starting and removal of Phaser game scenes
     */
     public static SceneManager: SceneManager;
     
    /**
     *  Loads and manages the sound of the game
     */
    public static SoundManager: SoundManager;
    
    /**
     * Manages the loading of images, sprites and atlasses 
     */
     public static ImageManager: ImageManager;

     /**
     * The game world width
     */
      public static WIDTH: number;

      /**
       * The game world height
       */
      public static HEIGHT: number;
  
      /**
       * The x position at the center of the screen
       */
      public static CENTER_WIDTH: number;
  
      /**
       * The y position at the center of the screen
       */
      public static CENTER_HEIGHT: number;
}