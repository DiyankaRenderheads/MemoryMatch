import * as Phaser from "phaser";
import GameScene from "../scenes/GameScene";
import BaseScene from "../scenes/BaseScene";
import BootScene from "../scenes/BootScene";
import DebugScene from "../scenes/DebugScene";
import PreloadScene from "../scenes/PreloadScene";
import MainMenuScene from "../scenes/MainMenuScene";
import HowToPlayScene from "../scenes/HowToPlayScene";

export type SceneDataType = {
    readonly sceneTypeRef: typeof Phaser.Scene;
    readonly key: SceneType;
}

export enum SceneType {
    Boot = "BOOT",
    Preload = "PRELOAD",
    Game = "GAME",
    Debug = "DEBUG",
    Menu = "MENU",
    HowToPlay ="HOWTOPLAY",

}

const sceneData: SceneDataType[] =
    [{
        sceneTypeRef: BootScene,
        key: SceneType.Boot
    },
    {
        sceneTypeRef: PreloadScene,
        key: SceneType.Preload
    },
    {
        sceneTypeRef: DebugScene,
        key: SceneType.Debug
    },
    {
        sceneTypeRef: GameScene,
        key: SceneType.Game
    },
    {
        sceneTypeRef: MainMenuScene,
        key: SceneType.Menu
    },
    {
        sceneTypeRef: HowToPlayScene,
        key: SceneType.HowToPlay
    },
];

export default sceneData;
