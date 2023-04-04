import * as Phaser from "phaser";
import MediumGameScene from "../scenes/MediumGameScene";
import BaseScene from "../scenes/BaseScene";
import BootScene from "../scenes/BootScene";
import DebugScene from "../scenes/DebugScene";
import PreloadScene from "../scenes/PreloadScene";
import MainMenuScene from "../scenes/MainMenuScene";
import HowToPlayScene from "../scenes/HowToPlayScene";
import LevelSelectorScene from "../scenes/LevelSelectorScene";
import EasyGameScene from "../scenes/EasyGameScene";
import HardGameScene from "../scenes/HardGameScene";

export type SceneDataType = {
    readonly sceneTypeRef: typeof Phaser.Scene;
    readonly key: SceneType;
}

export enum SceneType {
    Boot = "BOOT",
    Preload = "PRELOAD",
    Medium = "Medium",
    Debug = "DEBUG",
    Menu = "MENU",
    HowToPlay ="HOWTOPLAY",
    LevelSelector="LEVELSELECTOR",
    Easy="EASY",
    Hard="HARD",

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
        sceneTypeRef: MediumGameScene,
        key: SceneType.Medium
    },
    {
        sceneTypeRef: MainMenuScene,
        key: SceneType.Menu
    },
    {
        sceneTypeRef: HowToPlayScene,
        key: SceneType.HowToPlay
    },
    {
        sceneTypeRef: LevelSelectorScene,
        key: SceneType.LevelSelector
    },
    {
        sceneTypeRef: EasyGameScene,
        key: SceneType.Easy
    },
    {
        sceneTypeRef: HardGameScene,
        key: SceneType.Hard
    },

];

export default sceneData;
