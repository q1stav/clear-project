import {Module} from '../core/module'

export class CalcModule extends Module {
    trigger() {
        const menuPoint = document.querySelector(`.menu-item[data-type="${this.type}"]`)

        function calcButtons() {

            const calcDiv = document.createElement('div')
            calcDiv.className = 'calcDiv'
            document.body.prepend(calcDiv)

            const calcRes = document.createElement('div')
            calcRes.className = 'calcRes'
            calcDiv.append(calcRes)

            const result = document.createElement('h1')
            result.className = 'result'
            result.textContent = 0
            calcRes.append(result)

            const calcLog = document.createElement('div')
            calcLog.className = 'calcLog'
            calcDiv.append(calcLog)

            const resultLog = document.createElement('span')
            resultLog.className = 'resultLog'
            resultLog.textContent = 0
            calcLog.append(resultLog)

            const allCalcButtons = document.createElement('div')
            allCalcButtons.className = 'allCalcButtons'
            calcDiv.append(allCalcButtons)
        
            const allButtons = [
                ['x2', 'clear', '←', '/'], 
                ['7', '8', '9', '*'], 
                ['4', '5', '6', '+'], 
                ['1', '2', '3', '-'], 
                ['+/-', '0', ',', '=']
            ]
            const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
            const symbols = ['/', '*', '+', '-']
        
            for (let i = 0; i < 5; i++) {
                const buttonsLine = document.createElement('div')
                buttonsLine.className = `calcButtons`
                allCalcButtons.append(buttonsLine)
        
                allButtons[i].forEach(e => {
                    const button = document.createElement('button')
                    button.className = 'calcButton'
                    button.dataset.button = e
                    button.textContent = e
                    buttonsLine.append(button)
                })
            }
        
            document.querySelectorAll('.calcButton').forEach(e => {
                if (numbers.includes(e.dataset.button)) {
                    e.style.backgroundColor = 'rgb(139, 207, 216)'
                }
            })
        
            const count = () => {
                const data = result.textContent.split(' ')
        
                const deleteZero = (answer) => {
                    for (let i = answer.length - 1; i > 0; i--) {
                        if (answer[i] === '0') {
                            answer = answer.slice(0, -1)
                        } else {
                            break
                        }
                    }
                    result.textContent = answer
                }
        
                if ((data.length === 3) && (data[2] !== '')) {
        
                    resultLog.textContent = result.textContent
        
                    if (data[0].includes('.') || data[2].includes('.')) {
                        if (data[1] === '/') {
                            let answer = (Number(data[0]) / Number(data[2])).toFixed(6)
                            deleteZero(answer)
                        } else if (data[1] === '*') {
                            let answer = (Number(data[0]) * Number(data[2])).toFixed(6)
                            deleteZero(answer)
                        } else if (data[1] === '+') {
                            let answer = (Number(data[0]) + Number(data[2])).toFixed(6)
                            deleteZero(answer)
                        } else if (data[1] === '-') {
                            let answer = (Number(data[0]) - Number(data[2])).toFixed(6)
                            deleteZero(answer)
                        }
                    } else {
                        if (data[1] === '/') {
                            result.textContent = Number(data[0]) / Number(data[2])
                        } else if (data[1] === '*') {
                            result.textContent = Number(data[0]) * Number(data[2])
                        } else if (data[1] === '+') {
                            result.textContent = Number(data[0]) + Number(data[2])
                        } else if (data[1] === '-') {
                            result.textContent = Number(data[0]) - Number(data[2])
                        }
                    }
        
                    
                } else {
                    result.textContent = data[0]
                }  
            }
        
            const checkSymbol = () => {
                let answer = false
                symbols.forEach(elem => {
                    if (result.textContent.includes(elem)){
                        answer = true
                    }
                })
                return answer
            }
        
            const operation = (event) => {
                if (checkSymbol()){
                    count()
                    result.textContent += ` ${event.target.dataset.button} `
                } else { 
                    result.textContent += ` ${event.target.dataset.button} `
                }   
            }
        
            const erase = () => {
                if (result.textContent.length !== 1) {
                    if (symbols.includes(result.textContent[result.textContent.slice().length - 2])) {
                        result.textContent = result.textContent.slice(0, -3)
                    } else {
                        result.textContent = result.textContent.slice(0, -1)
                    }
                } else {
                    result.textContent = 0
                }
            }
        
            const comma = () => {
                const data = result.textContent.split(' ')
                if (checkSymbol() && data[2] !== '' && !data[2].includes('.')) {
                    result.textContent += '.'
                } else if (data.length === 1 && !result.textContent.includes('.')) {
                    result.textContent += '.'
                }
            }
        
            const minusPlus = () => {
                if (result.textContent[0] === '-') {
                    result.textContent =  result.textContent.slice(1)
                } else {
                    result.textContent = `-${result.textContent}`
                }
            }
        
            allCalcButtons.addEventListener('click', e => {
        
                if (result.textContent.length > 11) {
                    result.style.fontSize = '1em'
                } else {
                    result.style.fontSize = '2em'
                }
        
                if (numbers.includes(e.target.dataset.button)) {
                    if (result.textContent === '0' ) {
                        result.textContent = e.target.dataset.button
                    } else {
                        result.textContent += e.target.dataset.button
                    } 
                } else if (e.target.dataset.button === 'x2') {
                    let number = result.textContent.split(' ')[0]
                    result.textContent = number * number
                } else if (e.target.dataset.button === 'clear') {
                    result.style.fontSize = '2em'
                    result.textContent = 0
                    resultLog.textContent = 0
                } else if (e.target.dataset.button === '←') {
                    erase()
                } else if (symbols.includes(e.target.dataset.button)) {
                    operation(e)
                } else if (e.target.dataset.button === '=') {
                    count()
                } else if (e.target.dataset.button === ',') {
                    comma()
                } else if (e.target.dataset.button === '+/-') {
                    minusPlus()
                }
            })

            
        }

        menuPoint.addEventListener('click', () => {
            if (!document.querySelector('.calcDiv')) {
                if (document.querySelector('.clicksDiv')) {
                    document.body.removeChild(document.querySelector('.clicksDiv'))
                }
                
                calcButtons()
            } else {
                document.body.removeChild(document.querySelector('.calcDiv'))
            }
        }) 
    }
}