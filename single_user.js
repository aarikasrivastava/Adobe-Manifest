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
  
  
  var arr_new= new Array();
  arr_new[0]=["Customer Name","Transaction Number","Time/Enrollment Saving","Increased Transactions","Time/Enrollment($)","Customer Experience Value","Compliance Efficiency"];
  annual_transaction = document.getElementById('totalAnnualTransactions').value;
  Number_of_digital_enrollments= totalDigitalEnrollment * annual_transaction*0.01;
    result = TimeSavingCalculate(annual_transaction); 
    increased_transactions = increasedTransactions(annual_transaction);
    time_enrollment_$= TimeEnrollment$();
    customerExperience=customerExperienceValue(annual_transaction);
    compliance_Efficiency = complianceEfficiency();

  arr_new[1]=[customerName, annual_transaction.toString() ,result.toString() ,increased_transactions.toString(),time_enrollment_$.toString(),customerExperience.toString(), compliance_Efficiency.toString()];
  res=makeTable(arr_new);
  html2pdf().from(res).toPdf().save(arr_new[1][0]);
console.log(arr_new);
   console.log(result);
  console.log(increased_transactions);
  console.log( time_enrollment_$);
  console.log(customerExperience);
  console.log(compliance_Efficiency);
 
}
