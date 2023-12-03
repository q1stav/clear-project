import { async } from "regenerator-runtime";
import { Module } from "../core/module";
import { random } from "../utils";

export class SoundModule extends Module{
    constructor(type, text){
        super(type, text)
        this.audio = [ // массив ссылок на аудио со стороннего сайта
            "foley/walking_in_snow",
            "foley/water_splashing",
            "horror/hallow_wind",
            "weather/rain_on_roof",
            "weather/rolling_thunder",
            "ambiences/fire"
        ]
    }
    trigger(){
        const menuList = document.querySelector('ul')
        let sound = new Audio() // создал аудио, он является промисом
        const list = document.querySelector(`li[data-type='${this.type}']`)
        let timeout // переменная для удаления setTimeout
        menuList.addEventListener('click', async (event)=>{
            
           
                if(list.innerText === this.text){
                    list.innerText = 'Остановить звук'
                    sound.src = `https://actions.google.com/sounds/v1/${this.audio[random(0, 5)]}.ogg` // случайным образом подставляю значение из массива
                    await sound.play()
                    
                    timeout = setTimeout(()=>{ list.innerText = this.text }, sound.duration*1000) // эта строчка нужна для изменения текста в contextMenu если звук завершиться
                }
                else{
                    sound.pause()
                    timeout = clearTimeout(timeout)
                    list.innerText = this.text
                }
                if(event.target !== list){
                    sound.pause()
                    timeout = clearTimeout(timeout)
                    list.innerText = this.text
                }
            
            }
            
        )
        
    }
}