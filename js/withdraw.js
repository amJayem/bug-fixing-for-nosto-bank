document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotalString = getTextElementValueById("withdraw-total");
  const previousWithdrawTotal = parseInt(previousWithdrawTotalString);

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  setTextElementValueById('withdraw-total', newWithdrawTotal);
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  
  setTextElementValueById("balance-total", newBalanceTotal);
});
