export default function CheckOpenMenu() {
    if (document.querySelector('.calcDiv')) {
        document.body.removeChild(document.querySelector('.calcDiv'))
    }
    if (document.querySelector('.clicksDiv')) {
        document.body.removeChild(document.querySelector('.clicksDiv'))
    }
    if (document.querySelector('.counter')) {
        document.body.removeChild(document.querySelector('.counter'))
    }
    if (document.querySelector('.timer')) {
        document.body.removeChild(document.querySelector('.timer'))
    }
    if (document.querySelector('.module__custom-message')) {
        document.body.removeChild(document.querySelector('.module__custom-message'))
    }
    if (document.querySelector('.timer-container')) {
        document.body.removeChild(document.querySelector('.timer-container'))
    }  
}