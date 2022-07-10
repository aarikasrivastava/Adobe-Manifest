function TimeSavingCalculate(Number_of_annual_transactions){
TimeSaving_hrs = parseInt(Number_of_annual_transactions)*parseInt(timeSavedTransactions)*0.25;
enrollmentSaving_hrs = Number_of_digital_enrollments * timeSavedEnrollment *0.50 ;
return TimeSaving_hrs + "/" + enrollmentSaving_hrs;
}

function increasedTransactions(Number_of_annual_transactions) {
  return (parseInt(Number_of_annual_transactions) + parseInt(Number_of_digital_enrollments)) * 0.50;
}

function TimeEnrollment$(){
 
 TimeSaving_$=  0.80 * (TimeSaving_hrs * 40 * 0.50);
 EnrollmentSaving_$ = (enrollmentSaving_hrs * 25 * 0.50)  * 0.80 ;
return TimeSaving_$ + "/" + EnrollmentSaving_$;
}

