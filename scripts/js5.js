/* Bank account object using prompts/alerts for interaction. */

const account = {
  
  accountName: 'Mattias Larsson',

  
  balance: 9001, 

  
  isActive: true,

  
  getAccountName: function() {
    alert(`Account holder: ${this.accountName}`);
  },

  
  getBalance: function() {
    alert(`Current balance: ${this.balance.toFixed(2)} SEK`);
  },

  
  deposit: function(amount) {
    if (!this.isActive) {
      return this.accountError('Account is closed.');
    }
    if (typeof amount !== 'number' || !Number.isFinite(amount)) {
      return this.accountError('Deposit amount must be a valid number.');
    }
    if (amount <= 0) {
      return this.accountError('Deposit amount must be greater than zero.');
    }
    
    this.balance += amount;
    alert(`Deposited ${amount.toFixed(2)}. New balance: ${this.balance.toFixed(2)} SEK`);
    return true;
  },

  
  withdrawal: function(amount) {
    if (!this.isActive) {
      return this.accountError('Account is closed.');
    }
    if (typeof amount !== 'number' || !Number.isFinite(amount)) {
      return this.accountError('Withdrawal amount must be a valid number.');
    }
    if (amount <= 0) {
      return this.accountError('Withdrawal amount must be greater than zero.');
    }
    if (amount > this.balance) {
      return this.accountError('Insufficient funds for this withdrawal.');
    }
   
    this.balance -= amount;
    alert(`Withdrew ${amount.toFixed(2)}. New balance: ${this.balance.toFixed(2)} SEK`);
    return true;
  },


  accountError: function(message) {
   
    alert(`Error: ${message}`);
    console.error('Account error:', message);
    return false;
  },

 
  exitAccount: function() {
    this.isActive = false;
    alert('You have exited the account. Goodbye!');
  }
};


function askForAmount(promptText) {
  const input = prompt(promptText);
  if (input === null) return null; 
  
  const trimmed = input.trim();
  
  const amount = Number(trimmed);
  
  if (!Number.isFinite(amount)) {
    alert('Please enter a valid number.');
    return NaN;
  }
  return amount;
}

/* Main UI loop: simple menu using prompt. Keeps asking until exit. */
function runAccountUI() {
  /* If account isn't active from the start, do nothing */
  if (!account.isActive) {
    const reopen = confirm('Account is not active. Do you want to reopen it?');
    if (!reopen) return;
    account.isActive = true;
  }

  while (account.isActive) {
    const choice = prompt(
    `Choose an option (type the number):
    1 - Show account name
    2 - Show balance
    3 - Deposit
    4 - Withdraw
    5 - Exit`
    );

    if (choice === null) {
      /* If user cancels menu, exit */
      account.exitAccount();
      break;
    }

    /* Normalize input (trim and pick first character) */
    const command = choice.trim();

    switch (command) {
      case '1':
        account.getAccountName();
        break;
      case '2':
        account.getBalance();
        break;
      case '3': {
        const amount = askForAmount('How much do you want to deposit?');
        if (amount === null) { /* cancelled — go back to menu */ break; }
        if (Number.isNaN(amount)) { /* invalid number — ask again next loop */ break; }
        account.deposit(amount);
        break;
      }
      case '4': {
        const amount = askForAmount('How much do you want to withdraw?');
        if (amount === null) { break; }
        if (Number.isNaN(amount)) { break; }
        account.withdrawal(amount);
        break;
      }
      case '5':
        account.exitAccount();
        break;
      default:
        alert('Unknown option. Please enter a number from 1 to 5.');
    }
  }
}

document.getElementById('startBankBtn').addEventListener('click', function () {
    runAccountUI();
});