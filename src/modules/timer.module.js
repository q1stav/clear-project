import {Module} from '../core/module'
import CheckOpenMenu from '../checkOpenMenu'

export class TimerModule extends Module {
    constructor(type,text){
        super(type,text)
    }
    trigger(){
        const list = document.querySelector(`li[data-type='${this.type}']`)

        function createTimer() {
            let time = prompt('Задайте время в секундах')

            let timeInterval

            const timerContainer = document.createElement('div')
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
                if (time < 0) {
                    timeInterval = clearInterval(timeInterval)
                    timer.remove()
                    h1HTML.remove()
                    const messageEnd=document.createElement('div')
                    messageEnd.className='messageEnd'
                    messageEnd.textContent='Таймер завершен'
                    timerContainer.append(messageEnd)
                }
            }

            decreaceTime()

            timeInterval = setInterval(decreaceTime,1000)
        }
        
        

        list.addEventListener('click', () => {
            if (!document.querySelector('.timer-container')) {
                CheckOpenMenu()
                
                createTimer()
            } else {
                document.body.removeChild(document.querySelector('.timer-container'))
            }
        }) 
    }
}