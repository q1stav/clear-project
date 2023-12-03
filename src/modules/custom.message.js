import { RandomQuote } from '../core/random.quote'
import { Module } from '../core/module'
// import CheckOpenMenu from '../checkOpenMenu'

export class RandomText extends Module {
	constructor(type, text) {
		super(type, text)
		this.randomText = new RandomQuote()
	}

	trigger() {
		const menuList = document.querySelector('ul')
		const item = document.querySelector(`li[data-type = '${this.type}']`)
		
		menuList.addEventListener('click', (event) => {
			const text = document.querySelector('.module__custom-message')
				if(event.target === item){
					this.randomText.getRandomQuote()
					if (text) {
						text.remove()
					}
				}
				else{
					text.remove()
				}

		})
		
	}
}
