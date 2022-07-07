
function displayContent () {
  annual_transaction = document.getElementById('totalAnnualTransactions').value;
  digital_enrollment = document.getElementById('digitalEnrollmentTransactions').value;
    result = TimeSavingCalculate(annual_transaction , digital_enrollment); 
  console.log(result);



}
