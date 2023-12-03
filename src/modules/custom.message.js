import { RandomQuote } from '../core/random.quote'
import { Module } from '../core/module'
import CheckOpenMenu from '../checkOpenMenu'

export class RandomText extends Module {
	constructor(type, text) {
		super(type, text)
		this.randomText = new RandomQuote()
	}

	trigger() {
		const item = document.querySelector(`li[data-type = '${this.type}']`)

		item.addEventListener('click', (event) => {
			if (!document.querySelector('.module__custom-message')) {
				CheckOpenMenu()

				const text = document.querySelector('.module__custom-message')
				
				const { target } = event
				if (target) {
					this.randomText.getRandomQuote()
					if (text) {
						text.remove()
					}
				}
			} else {
				document.body.removeChild(document.querySelector('.module__custom-message'))
			}
		})
		
	}
}
