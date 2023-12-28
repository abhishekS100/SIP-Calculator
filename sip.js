

function calculateSIP() {

 var amount = parseFloat(document.getElementById("amount").value);
 var time = parseFloat(document.getElementById("time").value);
 var rate = parseFloat(document.getElementById("rate").value); 

  var monthlyRate = rate / 12 / 100;
  var months = time * 12;
  var futureValue = 0;

  if (isNaN(amount) || isNaN(rate) || isNaN(time)) {
   alert('Please enter valid numeric values.');
   return;
  }

  futureValue = amount * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
  var amountInvested = amount * months;

  console.log(futureValue, amountInvested);

  document.getElementById("aInvested").innerHTML = "₹" + amountInvested;
  document.getElementById("finalAmount").innerHTML = "₹" + Math.round(futureValue > 0 ? futureValue : 0);

}
