function first() {	
	console.log('12345');
}

function mainFunction()	{

}	

function parallelComputing(syncFunArray, mainFunction) {
	syncFunArray.forEach(fun => {
		fun(cb => { first();});	
	});
	mainFunction();	
}
