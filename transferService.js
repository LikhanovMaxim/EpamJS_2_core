"use strict";
var transferService = (function () {
  function TryRegister(person, account, balance){
	  try{
		  register(person, account, balance);
	  }catch (e) {
		  if (e instanceof RangeError) {
			console.log(e);
		  }
	  }
  }
  function register(person, account, balance){
	  if(balance < 0){
		  throw new RangeError("The balance is less than zero(" + balance + ").\n");
	  }
	  account._person = person;
	  account._isActivated = true;
	  account._balance = balance;
	  person.addAccount(account); 
  }
    function ActivtedError(message) {
		  this.name = 'Activted error';
		  this.message = message || 'Account is not activeted\n';
	}
	ActivtedError.prototype = Object.create(Error.prototype);
	ActivtedError.prototype.constructor = ActivtedError;
   function TryTransfer(accountFrom, accountTo, sum){
	    try{
			transfer(accountFrom, accountTo, sum);
		} catch(e){
			if (e instanceof RangeError) {
				console.log(e);
				return;
		  }
		  console.log(e);
		}
   }
   function transfer(accountFrom, accountTo, sum){
	   if(accountFrom._isActivated == false){
		   throw new ActivtedError(accountFrom._accountName + " is not activeted\n");
	   }
	   if(accountTo._isActivated == false){
		   throw new ActivtedError(accountTo._accountName + " is not activeted");
	   }
		if(accountFrom._balance - sum < 0){
			throw new RangeError("Balance(" + accountFrom._balance + ") is less than the amount transferred(" + sum + ").\n");	
		}
		accountFrom._balance = accountFrom._balance - sum;
		accountTo._balance = accountTo._balance + sum;
		var now = new Date();
		accountFrom._lastOperation = accountTo._lastOperation = now;
		console.log("Transfer is completed in " + now + "\n");
		console.log("From: \n");
		accountFrom.printToConsole();
		console.log("To: \n");
		accountTo.printToConsole();
   }
  function TryGetPersonAccounts(person){
	  try{
		  getPersonAccounts(person);
	  } catch(e){
		  if(e instanceof TypeError){
		  		console.log(e);  
		  }
	  }
  }
  function getPersonAccounts(person){
	  //var comp = new Person();
//	  if(!(person instanceof comp)){
//		//  
//	  }
	  if(!person){
		  throw new TypeError("The person not suitable this type");
	  }
	  if(person._accounts.length == 0){
		  console.log(person._name+" has no registered accounts\n");
		  return;
	  }
	  person._accounts.forEach(function (element) {  
	  		console.log(element);
	  });
  }
  return {
	   register: TryRegister,
	   transfer: TryTransfer,
	   getPersonAccounts: TryGetPersonAccounts
   };
})();
