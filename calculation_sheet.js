function TimeSavingCalculate(Number_of_annual_transactions){
TimeSaving_hrs = parseInt(Number_of_annual_transactions)*parseInt(timeSavedTransactions)*0.25;
enrollmentSaving_hrs = Number_of_digital_enrollments * timeSavedEnrollment *0.50 ;
return TimeSaving_hrs + "/" + enrollmentSaving_hrs;
}

function increasedTransactions(Number_of_annual_transactions) {
  number_increased_transaction = (parseInt(Number_of_annual_transactions) + parseInt(Number_of_digital_enrollments)) * 0.50;

  return number_increased_transaction;
}

function TimeEnrollment$(){
 
 TimeSaving_$=  0.80 * (TimeSaving_hrs * 40 * 0.50);
 EnrollmentSaving_$ = (enrollmentSaving_hrs * 25 * 0.50)  * 0.80 ;
 if (USD)
return TimeSaving_$   + " / " + EnrollmentSaving_$+" USD"; 
if (EURO) {
  
  return (TimeSaving_$*USDtoEURO) + " / " + (EnrollmentSaving_$ *USDtoEURO)+" EURO"; 
}
else if(GBP){
 
  return (TimeSaving_$ * USDtoGBP) + " /"  + (EnrollmentSaving_$ *USDtoGBP)+" GBP"; 
}
else if (AUD) {
 
  return (TimeSaving_$ * USDtoAUD)  + " / " + (EnrollmentSaving_$ * USDtoAUD)+" AUD";
}
}

function customerExperienceValue(Number_of_annual_transactions) {
  a= (reducedDropOffRate *0.01) * parseInt(Number_of_digital_enrollments) * 500 *0.10 ;
  b= (parseInt(Number_of_annual_transactions) + parseInt(Number_of_digital_enrollments)) * 0.50 *250*0.10 *0.10; 
  c= (parseInt(Number_of_annual_transactions) * 0.025 * 0.50 * 0.50)* 25*0.50;
  customer_value=(parseInt(a) + parseInt(b)+parseInt(c)) *0.85 ;
  return  customer_value ;
}

function complianceEfficiency(){
  compliance = ((employeesComplianceRegulatory*hoursSpentEmployeeComplianceRegulatory * 52* percentReductionComplianceRegulatory*0.01) * compensationComplianceRegulatoryStaff *0.85);
 return compliance; 

}

function legacyEfficiency(Number_of_annual_transactions) {
  f1 = (parseInt(Number_of_annual_transactions) + parseInt(Number_of_digital_enrollments) +parseInt((Number_of_digital_enrollments*reducedDropOffRate*0.01)) +parseFloat( number_increased_transaction ))*1.2;
  legalEff =  (parseInt(f1)+ parseInt((f1*percentCostESign*0.01)) ) * 0.95;
  return parseFloat(legalEff).toFixed(2);
}
function sustainbilitySaving(Number_of_annual_transactions){
  a1=(parseInt(Number_of_annual_transactions)+ parseInt(Number_of_digital_enrollments)+ parseInt(reducedDropOffRate*0.01 *Number_of_digital_enrollments) + parseInt(number_increased_transaction))*0.80;
  b1= a1 *0.50 ; 
  sustainbility = (parseInt(a1 * printingScanningFaxingSaving )+ parseInt(b1*mailingScanningFaxingSaving))*0.85;
  
  if (USD) return sustainbility + "USD" ; 
  if(EURO) return sustainbility*USDtoEURO +"EURO";
  if(AUD) return sustainbility * USDtoAUD+ "AUD";
  if(GBP) return sustainbility * USDtoGBP + "GBP";
}
function TotalSavings() {
  Total =
  parseInt(TimeSaving_$) +parseInt(EnrollmentSaving_$) + parseInt(customer_value) + parseInt(compliance) +
  parseInt(legalEff) + parseInt(sustainbility);
  if (USD) return Total+" USD" ; 
  if(EURO) return Total* USDtoEURO + " EURO" ;
  if(AUD) return Total * USDtoAUD+ " AUD";
  if(GBP) return Total * USDtoGBP + " GBP";
}