import {Module} from '../core/module'
import CheckOpenMenu from '../checkOpenMenu'


export class ClicksModule extends Module {
    constructor(type,text){
        super(type,text)
    }

    trigger(){
        const list = document.querySelector(`li[data-type='${this.type}']`)

        function countClicks() {
            let count = 0
            let time = 3
            let timeInterval
            const counterHTML=document.createElement('div')
            counterHTML.className='counter'
            
            const timer = document.createElement('div')
            timer.className='timer'
            // list.addEventListener('click', event)
            document.body.append(timer)
            document.body.append(counterHTML)

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

            decreaceTime()
            timeInterval = setInterval(decreaceTime,1000)

            document.body.addEventListener('click', increaseCount)

            function increaseCount() {
                count++
                counterHTML.textContent=count
            }
        }
        
        list.addEventListener('click', () => {
            if (!document.querySelector('.timer')) {
                CheckOpenMenu()
                
                countClicks()
            } else {
                document.body.removeChild(document.querySelector('.timer'))
            }
        })
    }
}