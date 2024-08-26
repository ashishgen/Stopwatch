let number = document.querySelector(".number");
let btnreset = document.getElementById("btnreset");
let btnplay = document.getElementById("btnplay");
let btnstop = document.getElementById("btnstop");

let  hr = 0;
let min =0;
let sec = 0;
let mls =0;

let timerId=null;
btnplay.addEventListener('click',function(){
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,10);
}

);
btnstop.addEventListener('click',function(){
    clearInterval(timerId);
});
btnreset.addEventListener('click',function(){
    clearInterval(timerId);
    number.innerHTML="0:0:0:0";
});

function startTimer(){
    mls++;
    if(mls==100){
        mls=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
        if(min==60){
            min=0;
            hr++;
        }
    }
    let mlsString= mls<10?'0${mls}':mls;
    let secString= sec<10?'0${sec}':sec;
    let minString= min<10?'0${min}':min;
    let hrString= hr<10?'0${hr}':hr;

    

}