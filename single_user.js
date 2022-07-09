function displayContent () {

//default values
timeSpentTransactionsBeforeSign =document.getElementById("timeSpentTransactionsBeforeSign").value;
timeSpentEnrollmentBeforeSign = document.getElementById("timeSpentEnrollmentBeforeSign").value;
percentDigitalEnrollmentTransactions = document.getElementById("percentDigitalEnrollmentTransactions").value;
printingScanningFaxingSaving = document.getElementById("printingScanningFaxingSaving").value;


var arr_new= new Array()
arr_new[0]=["Customer Name","Transaction Number","Time/Enrollment Saving", "Increased Transactions"];
annual_transaction = document.getElementById('totalAnnualTransactions').value;
Number_of_digital_enrollments= document.getElementById('digitalEnrollmentTransactions').value * annual_transaction;
  result = TimeSavingCalculate(annual_transaction); 
  increased_transactions = increasedTransactions(annual_transaction);
arr_new[1]=["Aarika_Single"," ",result.toString() , increased_transactions.toString()];
res=makeTable(arr_new);
html2pdf().from(res).toPdf().save(arr_new[1][0]);


console.log(result);



}
