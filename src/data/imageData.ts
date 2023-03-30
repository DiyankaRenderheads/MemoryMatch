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
    blank: {
        type: ImageType.Image,
        key: 'blank',
        src: 'src/assets/images/blank.png',
    },

    bear: {
        type: ImageType.Image,
        key: 'bear',
        src: 'src/assets/images/bear.png',
    },

    buffalo: {
        type: ImageType.Image,
        key: 'buffalo',
        src: 'src/assets/images/buffalo.png',
    },

    chick: {
        type: ImageType.Image,
        key: 'chick',
        src: 'src/assets/images/chick.png',
    },

    chicken: {
        type: ImageType.Image,
        key: 'chicken',
        src: 'src/assets/images/chicken.png',
    },

    cow: {
        type: ImageType.Image,
        key: 'cow',
        src: 'src/assets/images/cow.png',
    },

    crocodile: {
        type: ImageType.Image,
        key: 'crocodile',
        src: 'src/assets/images/crocodile.png',
    },

    dog: {
        type: ImageType.Image,
        key: 'dog',
        src: 'src/assets/images/dog.png',
    },

    duck: {
        type: ImageType.Image,
        key: 'duck',
        src: 'src/assets/images/duck.png',
    },

    elephant: {
        type: ImageType.Image,
        key: 'elephant',
        src: 'src/assets/images/elephant.png',
    },

    frog: {
        type: ImageType.Image,
        key: 'frog',
        src: 'src/assets/images/frog.png',
    },

    giraffe: {
        type: ImageType.Image,
        key: 'giraffe',
        src: 'src/assets/images/giraffe.png',
    },

    goat: {
        type: ImageType.Image,
        key: 'goat',
        src: 'src/assets/images/goat.png',
    },

    gorilla: {
        type: ImageType.Image,
        key: 'gorilla',
        src: 'src/assets/images/gorilla.png',
    },

    hippo: {
        type: ImageType.Image,
        key: 'hippo',
        src: 'src/assets/images/hippo.png',
    },

    horse: {
        type: ImageType.Image,
        key: 'horse',
        src: 'src/assets/images/horse.png',
    },

    monkey: {
        type: ImageType.Image,
        key: 'monkey',
        src: 'src/assets/images/monkey.png',
    },

    moose: {
        type: ImageType.Image,
        key: 'moose',
        src: 'src/assets/images/monkey.png',
    },

    narwhal: {
        type: ImageType.Image,
        key: 'narwhal',
        src: 'src/assets/images/narwhal.png',
    },

    owl: {
        type: ImageType.Image,
        key: 'owl',
        src: 'src/assets/images/owl.png',
    },

    panda: {
        type: ImageType.Image,
        key: 'panda',
        src: 'src/assets/images/panda.png',
    },

    parrot: {
        type: ImageType.Image,
        key: 'parrot',
        src: 'src/assets/images/parrot.png',
    },

    penguin: {
        type: ImageType.Image,
        key: 'penguin',
        src: 'src/assets/images/penguin.png',
    },

    pig: {
        type: ImageType.Image,
        key: 'pig',
        src: 'src/assets/images/pig.png',
    },

    rabbit: {
        type: ImageType.Image,
        key: 'rabbit',
        src: 'src/assets/images/rabbit.png',
    },

    rhino: {
        type: ImageType.Image,
        key: 'rhino',
        src: 'src/assets/images/rhino.png',
    },

    sloth: {
        type: ImageType.Image,
        key: 'sloth',
        src: 'src/assets/images/sloth.png',
    },

    snake: {
        type: ImageType.Image,
        key: 'snake',
        src: 'src/assets/images/snake.png',
    },

    walrus: {
        type: ImageType.Image,
        key: 'walrus',
        src: 'src/assets/images/walrus.png',
    },

    whale: {
        type: ImageType.Image,
        key: 'whale',
        src: 'src/assets/images/whale.png',
    },

    zebra: {
        type: ImageType.Image,
        key: 'zebra',
        src: 'src/assets/images/zebra.png',
    }
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