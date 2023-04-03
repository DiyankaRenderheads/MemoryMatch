import { FontType } from "./fontData";
import * as Phaser from 'phaser';

/*
* Contains all style settings for Text object
*/
export interface IGlobalStyleData
{
    [key: string]: Phaser.Types.GameObjects.Text.TextStyle
}

let globalStyles: IGlobalStyleData = 
{
    Heading :
    {
        fontSize: '65px',
        fontFamily: FontType.BarlowRegular,
        color: '#000000',
        align: 'center',
    },
    Body:
    {
        fontSize: '60px',
        fontFamily: FontType.BarlowRegular,
        color: '#000000',
        align: 'center',
    },
    DebugText:
    {
        fontSize: '15px',
        fontFamily: FontType.BarlowRegular,
        color: '#000000',
        align: 'center',
    },

    NiceSugarText:
    {
        fontSize: '15px',
        fontFamily: FontType.NiceSugarRegular,
        color: '#000000',
        align: 'center',
    },
}

export default globalStyles;