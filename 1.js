function justAddOne(array,	number)	{
	if(typeof(number) !== 'number' || !isCorrectArray(array)) {
		return null;
	}

	const num = Number.parseInt(array.join(''));
	const summ = new String(num + number);

	return summ.split('');
}	

function isCorrectArray(array) {
	if (array.length === 0) {
		return false
	}

	for(let i = 0; i<array.length; i++) {
		if(typeof(array[i]) !== 'number')
		{
			return false;
		} else {
			if(array[i] > 10 || array[i] < 0) {
				return false;
			}
		}
	}

	return true;
}
	
console.log(justAddOne([1,	0,	9],	2));	//	109	+	2	=	111;	=>	[1,	1,	1]	
console.log(justAddOne([2,	5,	1],	5));	//	251	+	5	=	256;	=>	[2,	5,	6]	
console.log(justAddOne([1],	4020));	//	1	+	4020	=	4021;	=>	[4,	0,	2,	1]	
console.log(justAddOne([1,	'4',	11,	null],	1));	//	'4'	-	строка	и	есть	null	=>	null
