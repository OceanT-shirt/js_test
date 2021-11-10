let myImage = document.querySelector('img');
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName(){
    let myName = prompt('あなたの名前を入力して下さい。');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozillaは素晴らしいよ、' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName()
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozillaは素晴らしいよ、' + storedName;
}

myButton.onclick = function(){
    setUserName();
}


myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src','images/firefox-icon2.png');
        myHeading.textContent = 'Bye world...';
    } else {
        myImage.setAttribute('src','images/firefox-icon.png');
        myHeading.textContent = 'Hello world!'
    }
}
