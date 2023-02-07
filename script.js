let option1button=document.querySelector (".option-one")

let option1screen =document.querySelector (".option-one-screen");

let option2button=document.querySelector(".option-two");

let option2screen=document.querySelector(".option-two-screen");

let storyopen=document.querySelector(".story-opening");

let buttons=document.querySelector(".buttons");

let option3=document.querySelector(".option-three");

let option4=document.querySelector(".option-four");


let option1end=document.querySelector(".option-one-end");

let option2end=document.querySelector(".option-two-end");


let button=document.querySelector(".buttons")

option1button.onclick=function(){
option1screen.style.display="block";
  storyopen.style.display="none";
  buttons.style.display="none";

};

option2button.onclick=function(){
option2screen.style.display="block";
  storyopen.style.display="none";
};

option3.onclick=function(){
option1screen.style.display="none";
  option1end.style.display="block";
};


option4.onclick=function(){
option1screen.style.display="none";
  option2end.style.display="block";
};
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};


