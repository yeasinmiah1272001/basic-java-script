
document.getElementById("btn-deposit").addEventListener("click", function(){
       const depositField = document.getElementById("deposit-field")
       const newDepositAmountString= depositField.value;
       const newDepositAmount = parseFloat(newDepositAmountString)
       // console.log(depositAmount);
       const depositTotalElement = document.getElementById("deposit-amount")
       const PreviousDepositTotalString = depositTotalElement.innerText;
       const PreviousDepositTotal = parseFloat(PreviousDepositTotalString)
       const currentDepositTotal = PreviousDepositTotal + newDepositAmount
       console.log(currentDepositTotal)
       depositTotalElement.innerText = currentDepositTotal


       depositField.value = "";

      const depositBalanceElement = document.getElementById("balance-field")
      const PreviousBalanceTotalString = depositBalanceElement.innerText;
      console.log(PreviousBalanceTotalString)
      const previousBalance = parseFloat(PreviousBalanceTotalString)

      const newBalance = currentDepositTotal + previousBalance
      depositBalanceElement.innerText = newBalance
})

// withdraw
 document.getElementById("wid-btn").addEventListener("click", function(){
       // withdraw-inputFiled
       const withdrawFiled = document.getElementById("wid-filed");
       const newWithdrawAmountString = withdrawFiled.value;
       const newWithdrawAmount = parseFloat(newWithdrawAmountString)
       // console.log(newWithdrawAmountString)
       // withdraw-h1?
       const withdrawTotalElement = document.getElementById("Withdraw-amount")
       const previousWithdrawTotalString = withdrawTotalElement.innerText;
       const previousTotalWithdrawAmount = parseFloat(previousWithdrawTotalString)
      const currentWithdrawAmountTotal = previousTotalWithdrawAmount + newWithdrawAmount;
      withdrawTotalElement.innerText = currentWithdrawAmountTotal;

//       balance-filed
const depositBalanceElement = document.getElementById("balance-field")
      const PreviousBalanceTotalString = depositBalanceElement.innerText;
      console.log(PreviousBalanceTotalString)
      const previousBalance = parseFloat(PreviousBalanceTotalString)

      const newBalance = previousBalance - currentWithdrawAmountTotal;
      depositBalanceElement.innerText = newBalance



      withdrawFiled.value = "";

})