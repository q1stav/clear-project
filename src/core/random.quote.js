export class RandomQuote {
	constructor() {
		this.quotes = [
			'Один раз – говорят, случайность, когда два раза – закономерность, которая может повториться не раз.',
			'Всё самое лучшее случается неожиданно.',
			'Цель определяет смысл в жизни.',
			'Если проигравший улыбается, победитель теряет вкус победы.',
			'Где нет опасности, не может быть и славы.',
			'Трудясь неустанно, не поднимая головы, некогда заработать нормальных денег.',
			'Никто не ценит того, чего слишком много.',
			'И хотя все кончилось, началось что-то новое.',
			'Каждый день имеет своё чудо.',
			'Страшно, когда на ответы нет вопросов…',
			'То, что вы ищете, тоже ищет вас.',
			'Упавший духом гибнет раньше срока.',
			'Все мы ищем счастье, а приобретаем опыт.',
		]
	}

	getRandomQuote = () => {
		const quote =
			this.quotes[Math.floor(Math.random() * this.quotes.length + 1)]
		const customMessage = document.createElement('div')
		customMessage.classList = 'module module__custom-message'
		customMessage.dataset.type = 'message'
		customMessage.textContent = quote
		customMessage.style.color = 'blue'
		customMessage.style.fontSize = '1.5rem'
		customMessage.style.position = 'absolute'
		customMessage.style.left = '0'
		customMessage.style.top = '0'
		document.body.append(customMessage) // добавление цитаты
		setTimeout(() => customMessage.remove(), 5000)
	}
}