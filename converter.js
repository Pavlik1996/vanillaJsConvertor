const RATES = {
	usd: 0.014,
	eur: 0.013
}

function convertor(rub, currency) {
	if (!RATES[currency]) {
		return null
	}

	return rub * RATES[currency]
}
