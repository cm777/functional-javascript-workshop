function repeat(fx, num){

	if (num <= 0) return;

	fx();

	return repeat(fx, --num);
}

module.exports = repeat;
