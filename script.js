let btn=document.querySelector("button");
let container=document.querySelector("#page")


btn.onclick= function(){
    let newcolor= changecolor();
    container.style.background= newcolor;
}
;

function changecolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color=`rgb( ${red},${green},${blue})`;
    return color;



}