function displayContent () {
  //default values
  customerName= document.getElementById('customerName').value;
  totalDigitalEnrollment = document.getElementById('digitalEnrollmentTransactions').value;
  timeSavedTransactions =document.getElementById('timeSavedTransactions').value;
  timeSavedEnrollment = document.getElementById('timeSavedEnrollment').value;
  
  printingScanningFaxingSaving = document.getElementById('printingScanningFaxingSaving').value;
  mailingScanningFaxingSaving=document.getElementById('mailingScanningFaxingSaving').value;
  averageCompensationTransactions=document.getElementById('averageCompensationTransactions').value;
  averageCompensationEnrollments=document.getElementById('averageCompensationEnrollments').value;
  
  reducedDropOffRate=document.getElementById('reducedDropOffRate').value;
  avgRevenuePerTrans=document.getElementById('avgRevenuePerTrans').value;
  avgPagesPerTransaction=document.getElementById('avgPagesPerTransaction').value;
  employeesComplianceRegulatory=document.getElementById('employeesComplianceRegulatory').value;
  hoursSpentEmployeeComplianceRegulatory=document.getElementById('hoursSpentEmployeeComplianceRegulatory').value;
  percentReductionComplianceRegulatory=document.getElementById('percentReductionComplianceRegulatory').value;
  compensationComplianceRegulatoryStaff=document.getElementById('compensationComplianceRegulatoryStaff').value;
  percentCostESign=document.getElementById('percentCostESign').value;
  
  USDtoGBP=document.getElementById('USDtoGBP').value;
  USDtoAUD=document.getElementById('USDtoAUD').value;
  USDtoEURO=document.getElementById('USDtoEURO').value;
  
  //check for currency 

  if(document.getElementById('USD').checked == true) USD = true; else USD = false;
  if(document.getElementById('GBP').checked == true) GBP = true; else GBP = false;
  if(document.getElementById('AUD').checked == true) AUD = true; else AUD =false;
  if(document.getElementById('EURO').checked == true) EURO = true; else EURO = false;
  
  var arr_new= new Array();
  arr_new[0]=["Customer Name","Transaction Number","Time/Enrollment Saving","Increased Transactions","Time/Enrollment($)","Customer Experience Value","Compliance Efficiency","Legal Efficiency","Total Savings"];
  annual_transaction = document.getElementById('totalAnnualTransactions').value;
  Number_of_digital_enrollments= totalDigitalEnrollment * annual_transaction*0.01;
    result = TimeSavingCalculate(annual_transaction); 
    increased_transactions = increasedTransactions(annual_transaction);
    time_enrollment_$= TimeEnrollment$();
    customerExperience=customerExperienceValue(annual_transaction);
    compliance_Efficiency = complianceEfficiency();
    legal_efficiency = legacyEfficiency(annual_transaction);
    total_saving = TotalSavings();

  arr_new[1]=[customerName, annual_transaction.toString() ,result.toString() ,increased_transactions.toString(),time_enrollment_$.toString(),customerExperience.toString(), compliance_Efficiency.toString(), legal_efficiency.toString(),total_saving.toString()];
  res=makeTable(arr_new);
 
 
  html2pdf().from(res).toPdf().save(arr_new[1][0]);
console.log(arr_new);
   console.log(result);
  console.log(increased_transactions);
  console.log( time_enrollment_$);
  console.log(customerExperience);
  console.log(compliance_Efficiency);
  console.log(legal_efficiency);
  console.log(total_saving);
 
}
