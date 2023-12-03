import {Module} from '../core/module'
import {random} from '../utils'

export class BackgroundModule extends Module {
    trigger() {
        const menuPoint = document.querySelector(`.menu-item[data-type="${this.type}"]`)

        const randomRGB = () => `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
        menuPoint.addEventListener('click', () => document.body.style.backgroundColor = randomRGB())
        
    }
}