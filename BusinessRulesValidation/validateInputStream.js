
var Converter = require('csvtojson').Converter;
var fs = require('fs');
var businessRules = require('../appliation/businessRules');

var inputStream = {
	
	 aravind :function (inputstreamFilepath) {

var CombinedResults =[];

if (fs.existsSync(inputstreamFilepath)){


var getfileExtension = inputstreamFilepath.split('.').pop()

if ( getfileExtension === 'txt'){




var converter = new Converter({});
						converter.fromFile(filePath,function(err,results){

for(var i = 0 ; i< results.length;i++){
	
	var validationResults = businessRules.applybusinessRules(results[i])
	CombinedResults.push(validationResults)	;						
							 			}

							 			
																		})

								}

									}

return CombinedResults;

											}
					};



module.exports = inputStream;