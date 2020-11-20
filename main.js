'use strict'
const input=document.querySelectorAll('input');
const button=document.querySelector('button');
const writeArea=document.querySelector('.result');

let feet=0;
let inch=0;
// fókusz elvesztése - vizsgálat
(function examination(){
input.forEach(element => {
    element.addEventListener('focusout', (event)=>{
       let e=event.target;
        if(isNaN(event.target.value))
       {console.log('hiba');
        e.value='It is not a number'; 
    }                
    })});})();
    function calc(){
        console.log('click');
        if(!isNaN(input[0].value)){
            feet=input[0].value;
        }else{input[0].focus();
            input[0].select();}
            //input[0].setSelectionRange(0,20) }
            if(!isNaN(input[1].value)){
                inch=input[0].value;
            }else{input[1].focus();
                input[1].setSelectionRange(0,20) }
        let sum=(feet*30.48)+(inch*2.54);
        writeArea.textContent=sum +' cm';
            
    }