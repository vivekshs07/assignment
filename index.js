
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

setTimeout(()=>{
    page.style.display="block"
},15000)

var sec=document.querySelector("#sec")
var min=document.querySelector("#min")
var minutes=9
if(minutes===0) minutes=9;
var second=60
min.innerHTML=minutes
sec.innerHTML=second
setInterval(()=>{
    if(second===0){
        second=60
        minutes-=1
        min.innerHTML=minutes
    };
    second--
    sec.innerHTML=second
},1000)


var form=document.querySelector(".form")
function pop(params) {
    form.style.display="flex"
}

setTimeout(()=>{
    pop()
},15000)

document.querySelector(".close").addEventListener("click",()=>{
    form.style.display="none"
})