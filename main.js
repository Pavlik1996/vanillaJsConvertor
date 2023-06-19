const valueInputNode = document.querySelector('.js-value-input')
const currencySelectorNode = document.querySelector('.js-currency-selector')
const outputNode = document.querySelector('.js-output')

const getInput = () => {
	outputNode.innerText = convertor(Number(valueInputNode.value), currencySelectorNode.value)
}

valueInputNode.addEventListener('input', getInput)
currencySelectorNode.addEventListener('change', getInput)
