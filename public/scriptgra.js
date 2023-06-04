const numbers = [1,2,3,4,5,6];
const buttons = document.querySelectorAll("button");
let num =0;
let wybrana=0;
let id_wybranego = 0;
let pierwszy = false;
let drugi = false;
for(button of buttons){
    
    button.innerText =  numbers[num];
    num++;
}

for(let i=0;i<1000;i++){
    let zapas;
    let number1 =Math.floor(Math.random()*6);
    let number2 =Math.floor(Math.random()*6);
    zapas = buttons[number1].innerText;
    buttons[number1].innerText = buttons[number2].innerText;
    buttons[number2].innerText = zapas;
}

const hej = (button) =>{
    if(drugi === false && pierwszy === false) 
    {
        wybrana = button.innerText;
        id_wybranego = Number(button.id);
        pierwszy = true;
    }
    else if(pierwszy === true && drugi === false){
        buttons[id_wybranego].innerText = button.innerText;
        console.log(button.innerText);
        button.innerText = wybrana;
        drugi = true;
    }

    
    //button.disabled = true;
}

const check = () =>{
    if(pierwszy === true && drugi === true)
    {
        pierwszy = false;
        drugi = false;
    }
    if(Number(buttons[0].id) + 1 === Number(buttons[0].innerText) &&
        Number(buttons[1].id) + 1 === Number(buttons[1].innerText) &&
        Number(buttons[2].id) + 1 === Number(buttons[2].innerText) &&
        Number(buttons[3].id) + 1 === Number(buttons[3].innerText) &&
        Number(buttons[4].id) + 1  === Number(buttons[4].innerText) &&
        Number(buttons[5].id) + 1 === Number(buttons[5].innerText)  ){
           
           for(button of buttons){
            button.disabled = true;
           }
           alert("Victory!!!!!!!!!");
           clearInterval(1);
 
        }
}
setInterval(check,10)