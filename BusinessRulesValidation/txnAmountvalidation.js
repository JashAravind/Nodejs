var amountValidationMethod = {

amountValidation:function (val)
	{
	var retVal = true;
	var reg = new RegExp('^[0-9]+(\.[0-9]{1,2})?$'); 
		if(val != ''){
			if (!reg.test(val)) {
				retVal=false;
			}
		}
		else{
			retVal = false;
		}
	return retVal;
	}

}

module.exports = amountValidationMethod;