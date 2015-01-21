function doubleAll(numbers) {

	var result = numbers.map(function double (num) {
		return num * 2;
	});

	return result;
}

module.exports = doubleAll;
