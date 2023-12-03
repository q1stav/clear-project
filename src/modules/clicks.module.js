import {Module} from '../core/module'
// import CheckOpenMenu from '../checkOpenMenu'


export class ClicksModule extends Module {
    constructor(type,text){
        super(type,text)
    }

    trigger(){
        const list = document.querySelector(`li[data-type='${this.type}']`)
        const timer = document.createElement('div')
        const counterHTML=document.createElement('div')

        function countClicks() {
            let count = 0
            let time = 3
            let timeInterval
            
            counterHTML.className='counter'
            
            
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
        const menuList = document.querySelector('ul')
        menuList.addEventListener('click', (event) => {
            if(event.target === list){
                if (!document.querySelector('.timer')) {
                    // CheckOpenMenu()
                    
                    countClicks()
                } else {
                    document.body.removeChild(document.querySelector('.timer'))
                }
            }
            else{
                // document.body.removeChild(document.querySelector('.timer'))
                // document.body.removeChild(document.querySelector('.counter'))
                timer.remove()
                counterHTML.remove()
            }
           
        })
    }
}