//import spritesheet json files here

///interface for the object of ImageDataObjects
export interface IImageData {
    [key: string]: ImageDataObject
}

///the individual image data object
export interface ImageDataObject {
    type: ImageType,
    key: string,
    src: string,
    atlasJson?
    atlas?
}

///the type of image data that is being stored
export enum ImageType {
    Image = 'Image',
    Sprite = 'Sprite',
    Atlas = 'Atlas',
}

let imageData: IImageData = {

    //#region Debug Images

    sky: {
        type: ImageType.Image,
        key: 'sky',
        src: 'src/assets/sky.png',
    },

    //#endregion


  /*  TokenJuiceAtlas: {
        type: ImageType.Atlas,
        key: 'TokenJuiceAtlas',
        src: 'src/assets/sprites/juice/',
        atlasJson: TokensJuiceJSON,
    },
    TokenJuice: {
        type: ImageType.Sprite,
        key: 'TokenJuice',
        atlas: 'TokenJuiceAtlas',
        src: 'PickupJuice_16.png',
    },*/

    //#endregion
};

export default imageData;