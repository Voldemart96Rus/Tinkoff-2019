const j = [	
	{	
			"name":	"Ashlynn Hartmann",	
			"cardNumber": "4929289137092267",	
			"date":	"2019-01-24T17:39:07.347Z",	
			"amount":	"579.63",	
			"currency":	"$"	
	},	
	{	
			"name":	"Philip Stoltenberg",	
			"cardNumber": "4916258329158678",	
			"date":	"2018-09-07T02:21:03.144Z",	
			"amount":"10472.99",	
			"currency":	"$"	
	}	
]
function print(array) {
	let result = [];
	array.forEach(el => {
		result.push("Имя покупателя: " + el.name);
		result.push("Номер карты: " + el.cardNumber.substr(0,4) + ' **** **** ' + el.cardNumber.substr(el.cardNumber.length-4,4));
		result.push("Дата и время операции: " + getDate(el.date));
		result.push("Сумма операции: " + getSum(el.amount, el.currency));
	});
	console.log(result.join('\n'));
}

function getDate(date) {
	const newDate = new Date(date);
	const day = newDate.getDate() < 10 ? 0 + '' + newDate.getDate() : newDate.getDate();
	const month  = newDate.getMonth() < 10 ? 0 + '' + newDate.getMonth() : newDate.getMonth();
	const min = newDate.getMinutes() < 10 ? 0 + '' + newDate.getMinutes() : newDate.getMinutes();
	const hour  = newDate.getHours() < 10 ? 0 + '' + newDate.getHours() : newDate.getHours();
	return day + ':' + month + ':' + newDate.getFullYear() + ' ' + hour + ':' + min;
}

function getSum(amount, currency) {
	const fraction = amount.substr(amount.indexOf('.'));
	const cel = amount.substr(0, amount.indexOf('.'));
	let result = [];
	for(let i = cel.length; i >= 0; i--) {
		result.push(cel[i]);
		if( i !== 0 && result.length % 4 === 0) {
			result.push(',');
		}
	}
	return currency + result.reverse().join('') + fraction;
}

print(j);
