function TimeCalculate (valueAdded , valueSubtracted){

  return valueAdded-valueSubtracted;
}

function TimeSavingCalculate(Number_of_annual_transactions){
TimeSaving_hrs = parseInt(Number_of_annual_transactions)*parseInt(timeSpentTransactionsBeforeSign)*0.25;
enrollmentSaving_hrs = Number_of_digital_enrollments * timeSpentEnrollmentBeforeSign *0.50 ;
return TimeSaving_hrs + "/" + enrollmentSaving_hrs;
}

function increasedTransactions(Number_of_annual_transactions) {
  return (parseInt(Number_of_annual_transactions) + parseInt(Number_of_digital_enrollments)) * 0.50;
}
