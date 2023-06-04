

const button = document.createElement('button');
const p = document.querySelector('#numerek');
p.innerText=0;
button.innerText = "losuj";


document.querySelector('body').append(button);

button.addEventListener('click', function()  {
    
    let num = Math.floor(Math.random()*10 +1);    
    this.innerText = "maslo";
    p.innerText =num;
    
})




