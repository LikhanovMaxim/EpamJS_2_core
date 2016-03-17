"use strict";
function Person(name, birthDate) {
  this._name = name;
  this._birthDate = birthDate;
  this._accounts = new Array();
}
Person.prototype.logName = function () {
  console.log("Name: " + this._name + "\nbirth date: "+ this._birthDate); 
};
Person.prototype.addAccount = function (account) {
	this._accounts.push(account);
};