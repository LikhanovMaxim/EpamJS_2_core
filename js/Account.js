"use strict";
function Account(accountName) {
  this._accountName = accountName;
  this._balance = 0.0;
  this._isActivated = false;
  this._person = null;
  this._lastOperation = null;
};
Account.prototype.toString = function () {
  var str = "Account name: " + this._accountName + "\nlastOperation: " + this._lastOperation + "\nBalance: " + this._balance; 
  return str;
};
Account.prototype.logName = function () {
  console.log(this.toString()); 
};
Account.prototype.printToConsole = function () {
  console.log(this.toString());
  console.log(this._person);
};
Object.defineProperty(Account.prototype, "lastOperation", {
  get: function () {
    return this._lastOperation;
  },
  set: function (name) {
  	 this._lastOperation  = lastOperation;
  }
});

Object.defineProperty(Account.prototype, "person", {
  get: function () {
    return this._person;
  },
  set: function (name) {
    this._person = person;
  }
});
Object.defineProperty(Account.prototype, "isActivated", {
  get: function () {
    return this._isActivated;
  },
  set: function (name) {
    this._isActivated = isActivated;
  }
});

