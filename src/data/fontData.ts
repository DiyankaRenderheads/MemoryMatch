/**
 * Interface for the object of FontDataObjects
 */

export interface IFontData
{
    [key: string]: FontDataObject
}

/**
 * The individual font data object
 */
export interface FontDataObject
{
    readonly src: string;
    readonly key: FontType;
}

/**
 * The type of image data that is being stored
 */
export enum ImageType
{
    Image = 'Image',
    Sprite = 'Sprite',
    Atlas = 'Atlas',
}

/**
 * Stores the font names as a standardised type
 */
export enum FontType
{
    BarlowRegular = "BarlowRegular",
    MotleyRegular= "MotleyRegular",
}

/**
 * FontData to store the URI to the source file and the font type as key
 */
let fontData: IFontData = 
{
    BarlowRegular: {
        src: 'src/assets/fonts/Barlow-Regular.ttf',
        key: FontType.BarlowRegular
    },

    MotleyRegular: {
        src: 'src/assets/fonts/Motley-Regular.ttf',
        key: FontType.MotleyRegular
    },
}

export default fontData;