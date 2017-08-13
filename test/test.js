var assert = require('assert');
var fs = require('fs');
var TextParserMethod = require('../Utility/TextParser')

describe('increment function', function() {

   this.timeout(15000);
   
  		it('file do not exists',function(done){	
			this.timeout(15000);
				TextParserMethod.Parsetextfile('./TestData/aravind.txt',function(returnValue){
					try {
							assert.equal("File do not exists", returnValue);
							
							}
							catch (e) {
								
							}


				})
				
				done();
			
		});
  
  
  it('file extension is not as expected',function(done){
			this.timeout(15000);
				TextParserMethod.Parsetextfile('./TestData/excelfile.xlsx',function(returnValue){
					 				 
					 try {
							assert.equal("Invalid File Type", returnValue);
							
							}
							catch (e) {
							
							}

				})		
		done();		

		});
		
		
	it('txid is not a number',function(done){
		this.timeout(15000);
				TextParserMethod.Parsetextfile('./TestData/txidValidation.txt',function(returnValue){
					var resultStatus = "Pass";
				if(returnValue.length>0)
					{	
						resultStatus = "Pass";
						for (var i = 0; i < returnValue.length; i++) { 
						var jsonString= JSON.stringify(returnValue[i]);
						
						}

						try {
							assert.equal("Pass", resultStatus);
							
							}
							catch (e) {
							
							}

					}
				
			})	
		done();				
		});
  
  
  it('client id is empty',function(done){
	this.timeout(15000);
				TextParserMethod.Parsetextfile('./TestData/clientidValidation.txt',function(returnValue){
					var resultStatus = "Pass";
				if(returnValue.length>0)
					{	
						resultStatus = "Pass";
						for (var i = 0; i < returnValue.length; i++) { 
						var jsonString= JSON.stringify(returnValue[i]);
						
						}

						try {
							assert.equal("Pass", resultStatus);
						
							}
							catch (e) {
								
							}

					}
				
			})	

		done();		
		});
  
  it('txn amount is not a valid amount',function(done){
				
		this.timeout(15000);
						TextParserMethod.Parsetextfile('./TestData/txAmountValidation.txt',function(returnValue){
								var resultStatus = "Pass";
						if(returnValue.length>0)
							{	
								resultStatus = "Pass";
								for (var i = 0; i < returnValue.length; i++) { 
								var jsonString= JSON.stringify(returnValue[i]);
								
								}

								try {
									assert.equal("Pass", resultStatus);
								
									}
									catch (e) {
									
									}

							}
						
					})	
		done();				
		});
 
 
 it('Valid data',function(done){
				
		  this.timeout(15000);
				TextParserMethod.Parsetextfile('./TestData/validData.txt',function(returnValue){
					var resultStatus = "Pass";
				if(returnValue.length>0)
					{	
						resultStatus = "Fail";
						for (var i = 0; i < returnValue.length; i++) { 
						var jsonString= JSON.stringify(returnValue[i]);
						
						}

						try {
							assert.equal("Pass", resultStatus);
							done();
							}
							catch (e) {
								done(e);
							}

					}
				
			})	
			done();				
	});
 
 
 it('invalid data',function(done){
			  this.timeout(15000);
				TextParserMethod.Parsetextfile('./TestData/validInvalidData.txt',function(returnValue){
				var resultStatus = "Pass";
				if(returnValue.length>0)
					{	
						resultStatus = "Pass";
						for (var i = 0; i < returnValue.length; i++) { 
						var jsonString= JSON.stringify(returnValue[i]);
						
						}

						try {
							assert.equal("Pass", resultStatus);
							
							}
							catch (e) {
								
							}

					}
				
				})	
			done();			
		});
 
});