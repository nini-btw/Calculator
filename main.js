let tg=document.querySelector(".theme-toggler");
let drk=document.querySelector(".calculator");

tg.addEventListener("click",function(){
    tg.classList.toggle("active")
    drk.classList.toggle("dark")
})


let op=document.querySelectorAll(".p");
let num=document.querySelectorAll(".btn-number");
let eq=document.querySelector(".btn-equal")
let c=document.querySelector("#clear");
let del=document.querySelector("#backspace")
let result=document.querySelector("#display");



eq.addEventListener("click",function(){
    x=result.textContent;
    x=x.replace(/x/g,'*');
    x=x.replace(/÷/g,'/');
    y=eval(x);
    if(Number.isInteger(y)==='true'){
        y=y.toFixed(9);
    }
    result.textContent=y;
})

c.addEventListener("click",function(){
    result.textContent="";
})

del.addEventListener("click",function(){
    result.textContent=result.textContent.slice(0,-1)
})



num.forEach(e => {
    e.addEventListener("click",function(){
        let value=e.textContent;
        result.append(value)
    })
    
});

op.forEach(e => {
    e.addEventListener("click",function(){
        let value=e.textContent;
        result.append(value)
    })
});


