
var Converter = require('csvtojson').Converter;
var BusinessRuleMethod = require('../BusinessRulesValidation/businessRules')
var fs = require('fs');

var TextParserMethod = {
	Parsetextfile: function(filePath, fn){
		
		 var filename = filePath.split("/").pop();

		if (fs.existsSync(filePath)){
			
			var fileExtension = filePath.split('.').pop()
			if (fileExtension === 'txt'){
			
						var converter = new Converter({});
						converter.fromFile(filePath,function(err,results){
							var tranStatus=[];
							for(var i = 0 ; i< results.length;i++){
								
				var validationResults = BusinessRuleMethod.applybusinessRules(results[i]);
				if(validationResults.length>0)
				{
					tranStatus.push(validationResults);

				}

							 }
							fn(tranStatus);
					})
			}else {
				 
				 fn("Invalid File Type");
			}

		}else {
				  fn("File do not exists");
		}

	}
};
module.exports = TextParserMethod;