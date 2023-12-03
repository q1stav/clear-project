import {Module} from '../core/module'


export class ClicksModule extends Module {
    constructor(type,text){
        super(type,text)
    }
    trigger(){

        let count = 0
        let time = 3
        let timeInterval
        const counterHTML=document.createElement('div')
        counterHTML.className='counter'
        document.body.append(counterHTML)
        const timer = document.createElement('div')
        timer.className='timer'
        const list = document.querySelector(`li[data-type='${this.type}']`)
        list.addEventListener('click', event)
                  
        function event(){
            document.body.append(timer)
            decreaceTime()
            timeInterval = setInterval(decreaceTime,1000)
                
                function decreaceTime(){
                    timer.innerText = `${time}`
                time--
                
                if(time < 0) {
                    document.body.removeEventListener('click', increaseCount)
                    timeInterval = clearInterval(timeInterval)
                    
                    counterHTML.innerText=`Кликов:${count}`
                    count = 0
                    time = 3
                    timer.innerText=`Время:${time} сек.`
                }
            }            
            document.body.addEventListener('click', increaseCount)
        }
    function increaseCount()
        {
        count++
        counterHTML.textContent=count
        console.log(count)
        }
    }
}
        
function TimerForClicks(){
    const timerBlock=document.createElement('div') // создание блока под таймер
    timerBlock.className='timer'
        const seconds=document.createElement('span') //секунды
        seconds.className='half'
        seconds.textContent=`00`
        const interval=document.createElement('span') //секунды
        interval.className='half'
        interval.textContent=':'
        const miliSeconds=document.createElement('span') //милиceкунды
        miliSeconds.className='half'
        miliSeconds.textContent='00'
        timerBlock.append(seconds,interval,miliSeconds)
    return timerBlock
}