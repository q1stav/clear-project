import { RandomQuote } from '../core/random.quote'
import { Module } from '../core/module'

export class RandomText extends Module {
	constructor(type, text) {
		super(type, text)
		this.randomText = new RandomQuote()
	}

	trigger() {
		const text = document.querySelector('.module__custom-message')

		const item = document.querySelector(`li[data-type = '${this.type}']`)
		item.addEventListener('click', event => {
			const { target } = event
			if (target) {
				this.randomText.getRandomQuote()
				if (text) {
					text.remove
				}
			}
			console.log(text)
		})
	}

	toHTML() {
		return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
	}
}
