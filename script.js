function stopTimer(){
    clearInterval(intervalId)
    intervalId=null;
}





const startBtn=document.querySelector("#start")
const stopBtn=document.querySelector("#stop")
const resetBtn=document.querySelector("#reset")
const timer=document.querySelector("#timer")
let timeRemaining=50

let intervalId=null
function handleStartClick(){
     if (intervalId!=null) {
        return
     }
     intervalId=setInterval(()=>{
        console.log("timer is running")
        if(timeRemaining<=0){
            clearInterval(intervalId)
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
   stopTimer()
}
function handleResetClick(){
    stopTimer()
    timeRemaining=50
    timer.textContent= "00:50"

}
startBtn.addEventListener("click",handleStartClick)

stopBtn.addEventListener("click",handleStopClick)

resetBtn.addEventListener("click",handleResetClick)




