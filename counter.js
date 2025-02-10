const count = document.getElementById('count');
const counter = document.getElementById("counter");
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');


document.getElementById('counter').addEventListener('click' , function(){
    if(increaseBtn.getAttribute("disabled") === null){
        increaseBtn.setAttribute("disabled" , true);
        decreaseBtn.setAttribute("disabled" , true);
       counter.classList.add("bg-red-400");
    }
 else{
    increaseBtn.removeAttribute("disabled" , true);
    decreaseBtn.removeAttribute("disabled" , true);
   counter.classList.remove("bg-red-400");
 }
 
})

increaseBtn.addEventListener('click' , function(e){
    let currentCount = Number(count.innerText);
    currentCount++;
    count.innerText = currentCount;
    e.stopPropagation()
})
decreaseBtn.addEventListener('click' , function(e){
    let currentCount = Number(count.innerText);
    currentCount--;
    count.innerText = currentCount;
    e.stopPropagation()
})


