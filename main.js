const progressBar=document.getElementById("bar");
const load=document.getElementById("load");
let barWidth=0;

const downloading=()=>{
    barWidth++;
    progressBar.style.width=`${barWidth}%`;
    setTimeout(()=>{
        load.innerHTML=(barWidth===100)? `${barWidth}% Completed`:`${barWidth}% progress`;

    },1000)
}

setTimeout(()=>{


let intervel=setInterval(()=>{
        if(barWidth===100){
            clearInterval(intervel);
        }
        else{
            downloading();
        }
},200)

},2000)
