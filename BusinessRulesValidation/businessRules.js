
var Converter = require('csvtojson').Converter;
var fs = require('fs');
var DateTimeMethod = require('../BusinessRulesValidation/dateTimevalidation');
var numberValidationMethod = require('../BusinessRulesValidation/txnIdValidation');
var amountValidationMethod = require('../BusinessRulesValidation/txnAmountvalidation');

var BusinessRuleMethod = {

					applybusinessRules:function(jsonObj)
					{
						var validationResults = [];

						for (var obj in jsonObj) {

							var transactionkey = jsonObj[0];


						        switch (obj) {
									case 'txid':

									
										var numberValidation = numberValidationMethod.numberValidation(jsonObj[obj]);
								        if (!numberValidation)
								        	{
								        			   var resultobj = new Object();
													   resultobj.txid = transactionkey;
													   resultobj.description  = "Transaction id cannot be string or alphanumberic";
													   var jsonString= JSON.stringify(resultobj);
													   validationResults.push(resultobj);
											}
								        break;
									
									case 'clientid':
								        if (jsonObj[obj]=='') 
								        	{
								    				   var resultobj = new Object();
													   resultobj.txid = transactionkey;
													   resultobj.description  = "Client id for the key cannot be null or empty";
													   var jsonString= JSON.stringify(resultobj);
													   validationResults.push(resultobj);
										   
											}
						
								    		break;
									case 'txnamount': 
								        if (!amountValidationMethod.amountValidation(jsonObj[obj])) 
								        	{		        	
													   var resultobj = new Object();
													   resultobj.txid = transactionkey;
													   resultobj.description  = "Transaction Amount for the key  is not in expected format";
													   var jsonString= JSON.stringify(resultobj);
													   validationResults.push(resultobj);

								    		}
								        break;
									case 'product':
								       

								        break;
									case 'datetime':

										if(!DateTimeMethod.dateValidation(jsonObj[obj]))
										{
											     	   var resultobj = new Object();
													   resultobj.txid = transactionkey;
													   resultobj.description  = "Date time provided for the key is either in future or not valid";
													   var jsonString= JSON.stringify(resultobj);
													   validationResults.push(resultobj);
									
										}
								        break;					
								    default:

								    				   var resultobj = new Object();
													   resultobj.txid = transactionkey;
													   resultobj.description  = "Unexpected key and this key is not handled'";
													   var jsonString= JSON.stringify(resultobj);
													   validationResults.push(resultobj);
								    	
										   
										}
									
								        break;
						        };
								
								return validationResults;

						}
}





module.exports = BusinessRuleMethod;