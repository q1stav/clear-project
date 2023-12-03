import {Module} from '../core/module'
import { random } from '../utils'
export class ShapeModule extends Module {
    constructor(type, text){
        super(type, text)
    }
    trigger(){
        const menuList = document.querySelector('ul')
        const list = document.querySelector(`li[data-type='${this.type}']`)

        const figure = document.createElement('div')
        
        const arrayFigures = [
            createSquare,
            createCircle,
            createRectangle,
            createOval,
            createTriangle,
            createParallelogram,
            createTrapezoid
        ]
        menuList.addEventListener('click', (event)=>{

            document.body.append(figure) //Добавляем

            if(event.target === list){
                figure.style = ''
                arrayFigures[random(0,6)](figure)
            }
            else{
                figure.remove() //Удаляем
            }
            
        })
        
        function randomPositionColor(fig){
            const width = document.body.clientWidth
            const height = document.body.clientHeight

            const menuWidth = fig.clientX
            const menuHeight = fig.clientY

            console.log(menuWidth)
            console.log(menuHeight)

            fig.style.position = 'relative'
            fig.style.top = `${random(0, height-fig.clientHeight-100)}px`
            fig.style.left = `${random(0, width-fig.clientWidth-100)}px`
            fig.style.rotate = `${random(0, 180)}deg`
        }

        function createSquare(fig){
            fig.style.width = `${random(10, 100)}px`
            fig.style.height = figure.style.width
            fig.style.background = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
            randomPositionColor(fig)
        }

        function createCircle(fig){
            fig.style.width = `${random(10, 100)}px`
            fig.style.height = figure.style.width
            fig.style.borderRadius = '50%'
            fig.style.background = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
            randomPositionColor(fig)
        }

        function createRectangle(fig){
            fig.style.width = `${random(10, 100)}px`
            fig.style.height = `${random(10, 100)}px`
            fig.style.background = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
            randomPositionColor(fig)
        }

        function createOval(fig){
            fig.style.height = `${random(10, 100)}px`
            fig.style.width = `${random(10, 100)}px`
            fig.style.borderRadius = '50%'
            fig.style.background = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
            randomPositionColor(fig)
        }

        function createTriangle(fig){
            fig.style.height = `0px`
            fig.style.width = `0px`
            fig.style.borderLeft = `${random(0, 100)}px solid transparent`
            fig.style.borderRight = `${random(0, 100)}px solid transparent`
            fig.style.borderTop = `${random(0, 100)}px solid rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
            randomPositionColor(fig)
        }

        function createParallelogram(fig){
            fig.style.height = `${random(10, 100)}px`
            fig.style.width = `${random(10, 100)}px`
            fig.style.transform = `skew(${random(0, 20)})`
            fig.style.background = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
            randomPositionColor(fig)
        }

        function createTrapezoid(fig){
            fig.style.height = `${random(10, 100)}px`
            fig.style.width = `${random(10, 100)}px`
            fig.style.borderLeft = `${random(0, 100)}px solid transparent`
            fig.style.borderRight = `${random(0, 100)}px solid transparent`
            fig.style.borderBottom = `${random(0, 100)}px solid rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
            randomPositionColor(fig)
        }

        
    }
}