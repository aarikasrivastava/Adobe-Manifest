function TimeSavingCalculate(Number_of_annual_transactions){
  if (USD){}
TimeSaving_hrs = (parseFloat(Number_of_annual_transactions)*parseFloat(timeSavedTransactions)*0.25).toFixed(2);
enrollmentSaving_hrs = (totalDigitalEnrollment* timeSavedEnrollment *0.50).toFixed(2) ;
return TimeSaving_hrs + "/" + enrollmentSaving_hrs;
}

function increasedTransactions(Number_of_annual_transactions) {
  number_increased_transaction = ((parseFloat(Number_of_annual_transactions) + parseFloat(totalDigitalEnrollment)) * 0.50).toFixed(2);

  return number_increased_transaction;
}

function TimeEnrollment$(){
 
 TimeSaving_$=  (0.80 * (TimeSaving_hrs * averageCompensationTransactions * 0.50)).toFixed(2);
 EnrollmentSaving_$ = ((enrollmentSaving_hrs * averageCompensationEnrollments * 0.50)  * 0.80).toFixed(2) ;
 if (USD)
return TimeSaving_$   + " / " + EnrollmentSaving_$+" USD"; 
if (EURO) {
  
  return (TimeSaving_$) + " / " + (EnrollmentSaving_$ )+" EURO"; 
}
else if(GBP){
 
  return (TimeSaving_$ ) + " /"  + (EnrollmentSaving_$ )+" GBP"; 
}
else if (AUD) {
 
  return (TimeSaving_$ )  + " / " + (EnrollmentSaving_$ )+" AUD";
}
}

function customerExperienceValue(Number_of_annual_transactions) {
  a= (reducedDropOffRate *0.01) * parseFloat(totalDigitalEnrollment) * avgRevenuePerTrans *0.10 ;
  b= number_increased_transaction *250*0.10 *0.10; 
  c= (parseFloat(Number_of_annual_transactions) * 0.025 * 0.50 * 0.50)* averageCompensationEnrollments*0.50;
  customer_value=((parseFloat(a) + parseFloat(b)+parseFloat(c)) *0.85) .toFixed(2);
  return  customer_value ;
}

function complianceEfficiency(){
  compliance = parseFloat(((employeesComplianceRegulatory*hoursSpentEmployeeComplianceRegulatory * 52* percentReductionComplianceRegulatory*0.01) * compensationComplianceRegulatoryStaff *0.85)).toFixed(2);
 return compliance; 

}

function legacyEfficiency(Number_of_annual_transactions) {
  f1 = (parseFloat(Number_of_annual_transactions) + parseFloat(totalDigitalEnrollment) +parseFloat((totalDigitalEnrollment*reducedDropOffRate*0.01)) +parseFloat( number_increased_transaction ))*1.2;
  legalEff =  (parseFloat(f1)+ parseFloat((f1*percentCostESign*0.01)) ) * 0.95;
  return parseFloat(legalEff).toFixed(2);
}
function sustainbilitySaving(Number_of_annual_transactions){
  a1=(parseFloat(Number_of_annual_transactions)+ parseFloat(totalDigitalEnrollment)+ parseFloat(reducedDropOffRate*0.01 *totalDigitalEnrollment) + parseFloat(number_increased_transaction))*0.80;
  b1= a1 *0.50 ; 
  sustainbility = ((parseFloat(a1 * printingScanningFaxingSaving )+ parseFloat(b1*mailingScanningFaxingSaving))*0.85).toFixed(2);
  
  if (USD) return sustainbility + "USD" ; 
  if(EURO) return sustainbility +"EURO";
  if(AUD) return sustainbility + "AUD";
  if(GBP) return sustainbility  + "GBP";
}
function TotalSavings() {
  Total =
  parseFloat(TimeSaving_$) +parseFloat(EnrollmentSaving_$) + parseFloat(customer_value) + parseFloat(compliance) +
  parseFloat(legalEff) + parseFloat(sustainbility);
  if (USD) return Total+" USD" ; 
  if(EURO) return Total + " EURO" ;
  if(AUD) return Total + " AUD";
  if(GBP) return Total  + " GBP";
}