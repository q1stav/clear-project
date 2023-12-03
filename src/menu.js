import {Menu} from './core/menu'
import { TimerModule } from './modules/timer.module'
import { ClicksModule } from './modules/clicks.module'
import { RandomText } from './modules/custom.message'

const menu = document.querySelector('.menu')
export class ContextMenu extends Menu {
    open() {
        document.addEventListener('contextmenu', e => {
            e.preventDefault() 

            const clientWidth = document.body.clientWidth
            const clientHeight = document.body.clientHeight

            menu.style.display = 'block'

            const menuWidth = menu.clientWidth
            const menuHeight = menu.clientHeight

            if (clientWidth - e.clientX > menuWidth) {
                menu.style.left = `${e.clientX}px`
            } else {
                menu.style.left = `${clientWidth - menuWidth}px`
            }

            if (clientHeight - e.clientY > menuHeight) {
                menu.style.top = `${e.clientY}px`
            } else {
                menu.style.top = `${clientHeight - menuHeight}px`
            }
        })
    }

    close() {
        document.addEventListener('click', () => menu.style.display = 'none')
    }

    add() {
        const module2=new ClicksModule('2','Подсчет кликов')
        const module3=new TimerModule('3','Таймер')
        const module5 = new RandomText('5', 'Кастомное сообщение')

        
        menu.innerHTML+=module2.toHTML()
        menu.innerHTML+=module3.toHTML()
        menu.innerHTML += module5.toHTML()
      
        module2.trigger()
        module3.trigger()
        module5.trigger()

    }
}