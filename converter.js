const valUsd = document.querySelector('.js-usd-val')
const valEur = document.querySelector('.js-eur-val')

const RATES = {}

function convertor(rub, currency) {
	if (!RATES[currency]) {
		return null
	}
	return rub * RATES[currency]
}

const fetchCur_OfficialRate = async () => {
	const response = await fetch('https://api.nbrb.by/exrates/rates?periodicity=0')
	const data = await response.json()
	const res = await data
	res.forEach(el => (el.Cur_Abbreviation === 'EUR' ? (RATES.eur = el.Cur_OfficialRate) : el))
	res.forEach(el => (el.Cur_Abbreviation === 'USD' ? (RATES.usd = el.Cur_OfficialRate) : el))
	valEur.innerText = RATES.eur + ' BLR'
	valUsd.innerText = RATES.usd + ' BLR'
}

fetchCur_OfficialRate()
