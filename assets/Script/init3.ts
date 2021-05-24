let ggg = {
    init(isGold: boolean) {

    },
    otherFunc(){
        this.tempData = {
            num:132,
            st :456
        }
       //this .num: Number;
    },
}

export default ggg;
// export = ggg;
// //module.exports = ggg;



export enum Type{
    sd = -1,
    ss ,

}

export interface aa {
   // gun: Type;
   gun:()=>void;
}