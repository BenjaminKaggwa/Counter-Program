const decreaseBtn=document.getElementById("decrease")
const increaseBtn=document.getElementById("increase")
const resetBtn=document.getElementById("reset")
const countLabel=document.getElementById("screen")
let count=0;

decreaseBtn.onclick=function(){count-=1
    countLabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0
    countLabel.textContent=count;
}
increaseBtn.onclick=function(){
    count+=1
    countLabel.textContent=count;
}



