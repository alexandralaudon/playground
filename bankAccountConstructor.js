//Write a constructor to model a bank account. Bank accounts belong to an accountHolder, has an accountType and a balance. The accountHolder should be a String holding the customers name, the accountType should be a String as well, the balance should be a Number. None of these fields should be modifiable by an outside entity, instead each should be accessed via setters and getters.

//Additionally, make a method called purchase which allows a user to make a purchase and subtract it from their balance. Once you have this working, add additional logic so that a balance cannot go negative and instead the code emits a message like "you can't do that" using console.log.

function BankAccount(accountHolder, accountType, balance) {
  this.accountHolder = accountHolder;
  this.accountType = accountType;
  this.balance = balance;
  var that = this;
  return {
    getBalance: function(){
      return that.balance;
    },
    setBalance: function(num){
      that.balance = num;
    },
    purchase: function(price){
      that.balance >= price ? that.balance = that.balance - price : console.log("Nice try.") ;
    }
  };
}

var alex = new BankAccount("Alex", "Savings", 110);
console.log(alex.getBalance());
alex.purchase(115);
alex.setBalance(124);
console.log(alex.getBalance());
