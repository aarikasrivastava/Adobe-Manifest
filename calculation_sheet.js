function metricsChange(num)
 {
      if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + "G ";
         }
         else if (num >= 1000000) {
            return (num / 1000000).toFixed(1)+ "M ";
         }
         else if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K ";
         }
         return num;
 }
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
 EnrollmentSaving_$ =((enrollmentSaving_hrs * averageCompensationEnrollments * 0.50)  * 0.80).toFixed() ;
 
 if (USD)
return metricsChange( TimeSaving_$ )  + " / " + (metricsChange( EnrollmentSaving_$))+" USD"; 
if (EURO) {
  
  return metricsChange(TimeSaving_$) + " / " + (metricsChange(EnrollmentSaving_$ ))+" EURO"; 
}
else if(GBP){
 
  return metricsChange(TimeSaving_$ ) + " /"  + (metricsChange(EnrollmentSaving_$ ))+" GBP"; 
}
else if (AUD) {
 
  return metricsChange(TimeSaving_$ )  + " / " + (metricsChange(EnrollmentSaving_$ ))+" AUD";
}
}

function customerExperienceValue(Number_of_annual_transactions) {
  a= (reducedDropOffRate *0.01) * parseInt(totalDigitalEnrollment) * avgRevenuePerTrans *0.10 ;
  b= number_increased_transaction *additionalTransaction*0.10 *0.10; 
  c= (parseInt(Number_of_annual_transactions) * 0.025 * 0.50 * 0.50)* averageCompensationEnrollments*0.50;
  customer_value=((parseInt(a) + parseInt(b)+parseInt(c)) *0.85) .toFixed();
  return  metricsChange (customer_value) ;
}

function complianceEfficiency(){
  compliance = parseInt(((employeesComplianceRegulatory*hoursSpentEmployeeComplianceRegulatory * 52* percentReductionComplianceRegulatory*0.01) * compensationComplianceRegulatoryStaff *0.85)).toFixed();
 return metricsChange( compliance); 

}

function legacyEfficiency(Number_of_annual_transactions) {
  f1 = (parseInt(Number_of_annual_transactions) + parseInt(totalDigitalEnrollment) +parseInt((totalDigitalEnrollment*reducedDropOffRate*0.01)) +parseInt( number_increased_transaction ))*1.2;
  legalEff =  (parseInt(f1)+ parseInt((f1*percentCostESign*0.01)) ) * 0.95;
  return metricsChange((legalEff));
  //.toFixed();
}
function sustainbilitySaving(Number_of_annual_transactions){
  a1=(parseInt(Number_of_annual_transactions)+ parseInt(totalDigitalEnrollment)+ parseInt(reducedDropOffRate*0.01 *totalDigitalEnrollment) + parseInt(number_increased_transaction))*0.80;
  b1= a1 *0.50 ; 
  sustainbility = ((parseInt(a1 * printingScanningFaxingSaving )+ parseInt(b1*mailingScanningFaxingSaving))*0.85).toFixed();
  
  if (USD) return metricsChange( sustainbility) + "USD" ; 
  if(EURO) return metricsChange( sustainbility) +"EURO";
  if(AUD) return metricsChange( sustainbility )+ "AUD";
  if(GBP) return  metricsChange( sustainbility ) + "GBP";
}
function TotalSavings() {
  Total =
  (parseInt(TimeSaving_$) +parseInt(EnrollmentSaving_$) + parseInt(customer_value) + parseInt(compliance) +
  parseInt(legalEff) + parseInt(sustainbility)).toFixed();
  if (USD) return metricsChange( Total )+" USD" ; 
  if(EURO) return metricsChange (Total) + " EURO" ;
  if(AUD) return metricsChange( Total) + " AUD";
  if(GBP) return  metricsChange( Total)  + " GBP";
}