const blink=document.getElementById("text");

setInterval(()=>{
    blink.style.visibility=blink.style.visibility==="hidden"?"visible":"hidden";
})