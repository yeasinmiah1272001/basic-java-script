document.getElementById("btn-deposit").addEventListener("click", function(){
       // deposit-input
       const depositInputFiled = document.getElementById("deposit-field")
       const depositInputFiledString = depositInputFiled.value;
       const newDepositInputFiled =  parseFloat(depositInputFiledString)

       // deposit-p
       const depositAmountElement = document.getElementById("deposit-amount")
       const depositAmountString = depositAmountElement.innerText;
       const previousAmount = parseFloat(depositAmountString)
       const currentAmount = previousAmount + newDepositInputFiled;
       depositAmountElement.innerText = currentAmount;
       depositInputFiled.value = "";

       // balance-p
        const balanceAmountElement = document.getElementById("balance-field")
        const balanceAmountString = balanceAmountElement.innerText;
        const previousBalanceAmount = parseFloat(balanceAmountString)
        const currentBalanceAmount = previousBalanceAmount + currentAmount;
        balanceAmountElement.innerText = currentBalanceAmount;

})

// withdraw-section
document.getElementById("wid-btn").addEventListener("click", function(){
        const withdrawInputFiled = document.getElementById("wid-filed")
       const withdrawInputFiledString = withdrawInputFiled.value;
       const newWithdrawInputFiled =  parseFloat(withdrawInputFiledString)
       // width-p
        const withdrawAmountElement = document.getElementById("Withdraw-amount")
       const withdrawAmountString = withdrawAmountElement.innerText;
       const previousAmount = parseFloat(withdrawAmountString)
       const currentAmount = previousAmount + newWithdrawInputFiled;
       withdrawAmountElement.innerText = currentAmount;
        withdrawInputFiled.value = "";
       //  balance
        const balanceAmountElement = document.getElementById("balance-field")
        const balanceAmountString = balanceAmountElement.innerText;
        const previousBalanceAmount = parseFloat(balanceAmountString)
        const currentBalanceAmount = previousBalanceAmount - currentAmount;
        balanceAmountElement.innerText = currentBalanceAmount;
})