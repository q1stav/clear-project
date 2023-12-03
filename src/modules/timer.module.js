import {Module} from '../core/module'

export class TimerModule extends Module {
    constructor(type,text){
        super(type,text)
    }
    trigger(){

        function createTimer() {
            let count = 0
            let timeInterval
            const timer = document.createElement('div')
            timer.className='timerModule'
            const h1HTML = document.createElement('h1')
            h1HTML.textContent='TIMER'
        
           
            console.log(timer)
            const list = document.querySelector(`li[data-type='${this.type}']`)
            
            list.addEventListener('click', event)
            function event(){
                let time = prompt('Задайте время в секундах')
                // document.body.append(h1HTML,timer)
                document.body.append(timer)
                timer.append(h1HTML)
                decreaceTime()
                timeInterval = setInterval(decreaceTime,1000)
                                    
                    function decreaceTime(){
                        timer.innerText = `${time}`
                        time--
                            if(time < 0) {
                                timeInterval = clearInterval(timeInterval)
                                timer.remove()
                                h1HTML.remove()
                                const messageEnd=document.createElement('div')
                                messageEnd.className='messageEnd'
                                messageEnd.textContent='Таймер завершен'
                                document.body.append(messageEnd)
                            }
                    }
            }
        }
        

        menuPoint.addEventListener('click', () => {
            if (!document.querySelector('.timerModule')) {
                CheckOpenMenu()
                
                createTimer()
            } else {
                document.body.removeChild(document.querySelector('.timerModule'))
                document.body.removeChild(document.querySelector('.counter'))
            }
        }) 
    }
}