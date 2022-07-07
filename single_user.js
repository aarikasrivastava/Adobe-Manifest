
function displayContent () {
  var arr_new= new Array()
  arr_new[0]=["Customer Name","Transaction Number","Result"];
  annual_transaction = document.getElementById('totalAnnualTransactions').value;
  digital_enrollment = document.getElementById('digitalEnrollmentTransactions').value;
    result = TimeSavingCalculate(annual_transaction , digital_enrollment); 
  arr_new[1]=["Aarika_Single"," ",result.toString()];
  res=makeTable(arr_new);
  html2pdf().from(res).toPdf().save(arr_new[1][0]);
  

  console.log(result);



}
