const pages=document.querySelectorAll(".page");

const prev=document.getElementById("prev");

const next=document.getElementById("next");

const counter=document.getElementById("counter");

let current=0;

function update(){

pages.forEach(p=>p.classList.remove("active"));

pages[current].classList.add("active");

counter.textContent=`${current+1} / ${pages.length}`;

prev.disabled=current===0;

next.disabled=current===pages.length-1;

}

prev.onclick=()=>{

if(current>0){

current--;

update();

}

};

next.onclick=()=>{

if(current<pages.length-1){

current++;

update();

}

};

update();
