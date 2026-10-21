const startBtn=document.querySelector("#start")
const stopBtn=document.querySelector("#stop")
const resetBtn=document.querySelector("#reset")
const timer=document.querySelector("#timer")
let timeRemaining=6


function handleStartClick(){
    let intervalId=setInterval(()=>{
        console.log("timer is running")
        if(timeRemaining<=0){
            clearInterval(intervalId)
            console.log("timer finished")
            window.alert("TIMER IS OVER!")
            return;
        }
        timeRemaining--;
        let minutes= Math.floor(timeRemaining/60)
       
        let seconds= Math.floor(timeRemaining%60)
        minutes=String(minutes)
        seconds=String(seconds)
    
        minutes=minutes.padStart(2,"0")
        
        seconds=seconds.padStart(2,"0")
        

        let formattedTime= `${(minutes)}:${seconds}`
        
        timer.textContent=formattedTime

    },1000)
}


function handleStopClick(){
    console.log("I am handling the stop button's click")
}
function handleResetClick(){
    console.log("I am handling the reset button's click")
}
startBtn.addEventListener("click",handleStartClick)

stopBtn.addEventListener("click",handleStopClick)

resetBtn.addEventListener("click",handleResetClick)




