let html = document.querySelector('#html');
let css = document.querySelector('#css');
let js = document.querySelector('#js');
let react = document.querySelector('#react');
let angular = document.querySelector('#angular');
let bootstrap = document.querySelector('#bootstrap');
let php = document.querySelector('#php');
let python = document.querySelector('#python');
let mysql = document.querySelector('#mysql');
let java = document.querySelector('#java');
let mongodb = document.querySelector('#mongo');
let node = document.querySelector('#node');


let result = document.querySelector('.header-service');
let damicode = [html,css,js,react,angular,bootstrap,php,python,mysql,java,mongodb,node];
let themain = document.querySelector('#us');
let footer = document.querySelector('.footer');




let submit = document.querySelector('.submit');
let input = document.querySelector('#bigsearch');
let scroll = document.querySelector('.scroll');

submit.addEventListener('click', () => {
    for(let key of damicode)
    key.style.display = "none"; 

    damicode.filter(a => {
       if(a.id == input.value){
       result.textContent = "Search Result";
       result.style.marginBottom = "4rem";
       result.marginTop = "10px";
       a.style.marginTop = "0px";
       a.style.display = "block";
       a.style.width = "35%";
       themain.style.padding = "0px";
       scroll.style.display = "none";
       footer.style.marginTop = '40%';
       //input.value = '';
        } 
    })

})