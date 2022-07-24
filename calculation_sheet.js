function TimeSavingCalculate(Number_of_annual_transactions){
  if (USD){}
TimeSaving_hrs = (parseInt(Number_of_annual_transactions)*parseInt(timeSavedTransactions)*0.25).toFixed();
enrollmentSaving_hrs = (totalDigitalEnrollment* timeSavedEnrollment *0.50).toFixed() ;
return TimeSaving_hrs + "/" + enrollmentSaving_hrs;
}

function increasedTransactions(Number_of_annual_transactions) {
  number_increased_transaction = ((parseInt(Number_of_annual_transactions) + parseInt(totalDigitalEnrollment)) * 0.50).toFixed();

  return number_increased_transaction;
}

function TimeEnrollment$(){
 
 TimeSaving_$=  (0.80 * (TimeSaving_hrs * averageCompensationTransactions * 0.50)).toFixed();
 EnrollmentSaving_$ = ((enrollmentSaving_hrs * averageCompensationEnrollments * 0.50)  * 0.80).toFixed() ;
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
  a= (reducedDropOffRate *0.01) * parseInt(totalDigitalEnrollment) * avgRevenuePerTrans *0.10 ;
  b= number_increased_transaction *250*0.10 *0.10; 
  c= (parseInt(Number_of_annual_transactions) * 0.025 * 0.50 * 0.50)* averageCompensationEnrollments*0.50;
  customer_value=((parseInt(a) + parseInt(b)+parseInt(c)) *0.85) .toFixed();
  return  customer_value ;
}

function complianceEfficiency(){
  compliance = parseInt(((employeesComplianceRegulatory*hoursSpentEmployeeComplianceRegulatory * 52* percentReductionComplianceRegulatory*0.01) * compensationComplianceRegulatoryStaff *0.85)).toFixed();
 return compliance; 

}

function legacyEfficiency(Number_of_annual_transactions) {
  f1 = (parseInt(Number_of_annual_transactions) + parseInt(totalDigitalEnrollment) +parseInt((totalDigitalEnrollment*reducedDropOffRate*0.01)) +parseInt( number_increased_transaction ))*1.2;
  legalEff =  (parseInt(f1)+ parseInt((f1*percentCostESign*0.01)) ) * 0.95;
  return parseInt(legalEff).toFixed();
}
function sustainbilitySaving(Number_of_annual_transactions){
  a1=(parseInt(Number_of_annual_transactions)+ parseInt(totalDigitalEnrollment)+ parseInt(reducedDropOffRate*0.01 *totalDigitalEnrollment) + parseInt(number_increased_transaction))*0.80;
  b1= a1 *0.50 ; 
  sustainbility = ((parseInt(a1 * printingScanningFaxingSaving )+ parseInt(b1*mailingScanningFaxingSaving))*0.85).toFixed();
  
  if (USD) return sustainbility + "USD" ; 
  if(EURO) return sustainbility +"EURO";
  if(AUD) return sustainbility + "AUD";
  if(GBP) return sustainbility  + "GBP";
}
function TotalSavings() {
  Total =
  (parseInt(TimeSaving_$) +parseInt(EnrollmentSaving_$) + parseInt(customer_value) + parseInt(compliance) +
  parseInt(legalEff) + parseInt(sustainbility)).toFixed();
  if (USD) return Total+" USD" ; 
  if(EURO) return Total + " EURO" ;
  if(AUD) return Total + " AUD";
  if(GBP) return Total  + " GBP";
}