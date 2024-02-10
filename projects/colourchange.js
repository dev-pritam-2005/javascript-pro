// Generate the randome colour

const randomeColour = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]     
    }
    return color;
    
}

let intervalId;
const startChangingColor = function () {

    if (!intervalId) {
        intervalId = setInterval(backgroundChangingFunction,1000);

    }

    function backgroundChangingFunction()
    {  document.body.style.backgroundColor=randomeColour()}

}
 
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}



document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);