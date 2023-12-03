import {Menu} from './core/menu'
import { ClicksModule } from './modules/clicks.module'
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

        menu.innerHTML+=module2.toHTML()

        module2.trigger()
    }
}