
let time = Number(prompt('Time in Minutes'))*60
const timing = function(){
    document.querySelector('.timer').textContent = ''

    const timer = setInterval(function(){
        let hr = String(Math.trunc(time/(60*60))).padStart(2,0)
        let min = String(Math.trunc(time/60)%60).padStart(2,0)
        let sec = String(Math.trunc(time%60)).padStart(2,0)
        document.querySelector('.timer').textContent = `${hr}:${min}:${sec}`
        time--

        if(time===-1){
            clearInterval(timer)
        }
    },1000)

}

let t
document.querySelector('.stopwatch').textContent='00:00:00'
const startwatch = function()
{
    let time = 0
    t = setInterval(function(){
        let hr = String(Math.trunc(time/(60*60))).padStart(2,0)
        let min = String(Math.trunc(time/60)%60).padStart(2,0)
        let sec = String(Math.trunc(time%60)).padStart(2,0)
        document.querySelector('.stopwatch').textContent = `${hr}:${min}:${sec}`
        time++
    },1000)
}

const stopwatch = function(){
    // document.querySelector('stopwatch').textContent='00:00:00'
    clearInterval(t)
}
const reset = function(){
    clearInterval(t)
    document.querySelector('.stopwatch').textContent = '00:00:00'
}

let btnStart = document.getElementById('btnStart')
btnStart.addEventListener('click',startwatch)
let btnStop = document.getElementById('btnStop')
btnStop.addEventListener('click',stopwatch)
let btnReset = document.getElementById('btnReset')
btnReset.addEventListener('click',reset)
// if(btn.textContent === 'Start'){
//     btn.addEventListener('click',startwatch)
//     btn.textContent = 'Stop'
// }else{
//     btn.addEventListener('click',stopwatch)
//     btn.textContent = 'Start'
// }
timing()
// document.querySelector('.timer').addEventListener('load',timing)
