import {Module} from '../core/module'
// import CheckOpenMenu from '../checkOpenMenu'

export class TimerModule extends Module {
    timeInterval = null;
    constructor(type,text){
        super(type,text)
    }
    trigger(){
        const list = document.querySelector(`li[data-type='${this.type}']`)
        const timerContainer = document.createElement('div')
        function createTimer() {
            let time = Number(prompt('Задайте время в секундах'))
            if(isNaN(time)) {
                alert('Введите число')
                createTimer()
                return
            }
            
            console.log(typeof time)
          

            
                timerContainer.className = 'timer-container'
                document.body.append(timerContainer)
    
                const timer = document.createElement('div')
                timer.className='timerModule'
                const h1HTML = document.createElement('h1')
                h1HTML.textContent='TIMER'
                timerContainer.append(h1HTML, timer)
    
                function decreaceTime(){
                    timer.innerText = `${time}`
                    time--
                    if (time === 0) {
                        clearInterval(this.timeInterval)
                        this.timeInterval = null
                        timer.remove()
                        h1HTML.remove()
                        const messageEnd=document.createElement('div')
                        messageEnd.className='messageEnd'
                        messageEnd.textContent='Таймер завершен'
                        timerContainer.append(messageEnd)
                    }
                }
                
                    decreaceTime()
                    this.timeInterval = setInterval(decreaceTime,1000)
                      
        }
        
        
        const menuList = document.querySelector('ul')
        menuList.addEventListener('click', (event) => {
            if(event.target === list){
                if (!document.querySelector('.timer-container')) {
                    // CheckOpenMenu()
                    if(this.timeInterval){
                        clearInterval(this.timeInterval)
                        this.timeInterval = null
                    }
                    timerContainer.innerHTML = ''
                    timerContainer.remove()
                    // if(timerContainer)
                    createTimer()
                } else {
                    document.body.removeChild(document.querySelector('.timer-container'))
                }
            }
            else{
                // document.body?.removeChild(document.querySelector('.timer-container'))
                timerContainer.remove()
            }
            
        }) 
    }
}