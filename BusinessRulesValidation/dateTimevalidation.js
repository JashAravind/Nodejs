var DateTimeMethod = {

dateValidation:function (dateVal)
{
	var retval = true;
	var givenDate = new Date(Date.parse(dateVal));
	var currentDate = new Date(); 
	if (givenDate=='Invalid Date') {
		retval = false;
	}
	
	else if (givenDate> currentDate) {
		retval = false;
	}

	return retval;
}

}
module.exports = DateTimeMethod;