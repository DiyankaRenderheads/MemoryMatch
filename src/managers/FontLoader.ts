import fontData, {FontDataObject} from "../../src/data/fontData";

//Loads fonts using config settings in FontData obejct
export default class FontLoader
{
    constructor(callback: () => void){
        let last = Object.keys(fontData)[Object.keys(fontData).length - 1];
        Object.keys(fontData).forEach(item => {
            if (item != last)
            {
                this.loadFont(fontData[item]);
            }
            else
            {
                this.loadFont(fontData[item], callback);
            }
        });
        document.body.classList.add('fonts-loaded');
    }


    loadFont(font: FontDataObject, callback?: () => void): void
    {
        let newFont = new FontFace(font.key, `url(${font.src})`);
        newFont.load().then(function(loaded) 
        {
            if (callback != null)
            {
                console.log("FontLoader has finished loading fonts!");
                callback();
            }
            document.fonts.add(newFont);
        }).catch(function(error)
        {
            console.log(error);
            return error;
        });
    }
}