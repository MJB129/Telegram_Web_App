import accessoriesImg from "../images/accessories.jpg";
import concentrates1Img from "../images/concentrates.jpeg";
import edibles1Img from "../images/edibles1.jpg";
import flowertestpicImg from "../images/flowertestpic.jpg";
import shakeImg from "../images/shake.jpg";
import shroomsImg from "../images/shrooms.jpg";
import smallsImg from "../images/smalls.jpg";

export function getData(){
    return [
        {title:"Fifth Pocket", price: 75, img: flowertestpicImg, desc: "The bud you keep in your fifth pocket.",id:1}
        ,{title:"Front Pocket", price: 40, img: smallsImg, desc: "The bud you share with the homies."},
        {title:"Back Pocket", price: 30, img: shakeImg, desc: "The bud you smoke when you're broke."},
        {title:"Edibles", price: 15, img: edibles1Img, desc: "The bud you eat."},
        {title:"Concentrates", price: 20, img: concentrates1Img, desc: "The bud you dab."},
        {title:"Shrooms", price: 20, img: shroomsImg, desc: "The trippy experience."},
        {title:"Accessories", price: 5, img: accessoriesImg, desc: "The smoking experience."},
    ]
}

