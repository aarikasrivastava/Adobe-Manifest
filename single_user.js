function displayContent () {
  //default values
  customerName= document.getElementById('customerName').value;
  annual_transaction = document.getElementById('totalAnnualTransactions').value;
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

  costPerTransaction = document.getElementById('costPerTransaction').value;
  additionalTransaction=document.getElementById ('additionalTransaction').value;
  
  
  USDtoGBP=document.getElementById('USDtoGBP').value;
  USDtoAUD=document.getElementById('USDtoAUD').value;
  USDtoEURO=document.getElementById('USDtoEURO').value;
  
  //check for currency 
var curr
  if(document.getElementById('USD').checked == true) {
    USD = true; 
    curr = "USD"
  }

  else USD = false;
  if(document.getElementById('GBP').checked == true)
  {
    curr = "GBP"
    GBP = true; 
  } else GBP = false;
  if(document.getElementById('AUD').checked == true) 
  {curr = "AUD"
    AUD = true;
   } else AUD =false;
  if(document.getElementById('EURO').checked == true) {
    curr = "EURO"
    EURO = true;
     
  }
  else EURO = false;
  
  if (USD==true) currency = 0.27;
  if (GBP==true) currency = 0.21;
  if (AUD==true) currency = 0.37;
  if (EURO==true) currency = 0.24;
  // document.getElementById('USDtoGBP').addEventListener("click", function(){ console.log("Hello World!"); });
var assumptions = new Array();
assumptions[0]= [totalDigitalEnrollment.toString(), mailingScanningFaxingSaving.toString() , printingScanningFaxingSaving.toString() ,
  timeSavedTransactions.toString() , timeSavedEnrollment.toString(),averageCompensationTransactions.toString() 
,averageCompensationEnrollments.toString() ,reducedDropOffRate.toString() , avgRevenuePerTrans.toString(),
avgPagesPerTransaction.toString() , employeesComplianceRegulatory.toString() , hoursSpentEmployeeComplianceRegulatory.toString() ,
 percentReductionComplianceRegulatory.toString() , compensationComplianceRegulatoryStaff.toString() ,percentCostESign.toString()]
  
factor= annual_transaction/10 ; 
amount = currency*factor;
var thirdSlide = new Array();
thirdSlide[0]=[(factor*gallonsOfWater).toFixed(1).toString(),(factor * EquivalentOfLoadsOfLaundry).toFixed(1).toString(),
      (factor * PoundsOfWood).toFixed(1).toString(),(factor * EquivalentOfTrees).toFixed(1).toString(),(factor * PoundsOfWaste).toFixed(1).toString(),(factor * EquivalentOfReamsOfPaper).toFixed(1).toString(),
      (factor * PoundsOfGreenhouseGasses).toFixed(1).toString(),(factor * EquivalentOfDaysOfDrivingYourCar).toFixed(1).toString(),(factor * KWHoursOfTotalEnergy).toFixed(1).toString(),(factor*EquivalentOfDaysOfRefrigeratorUse).toFixed(1).toString(),annual_transaction.toString(),amount.toFixed(1).toString];



  var arr_new= new Array();
  arr_new[0]=["Customer Name","Transaction Number","Time/Enrollment Saving","Increased Transactions","Time/Enrollment($)","Customer Experience Value","Compliance Efficiency","Legal Efficiency","Sustainbility Savings","Total Savings"];
  
  Number_of_digital_enrollments= totalDigitalEnrollment * annual_transaction*0.01;
    result = TimeSavingCalculate(annual_transaction); 
    increased_transactions = increasedTransactions(annual_transaction);
    time_enrollment_$= TimeEnrollment$();
    customerExperience=customerExperienceValue(annual_transaction);
    compliance_Efficiency = complianceEfficiency();
    legal_efficiency = legacyEfficiency(annual_transaction);
    sustainbility_saving = sustainbilitySaving(annual_transaction);
    total_saving = TotalSavings();

  arr_new[1]=[customerName, annual_transaction.toString() ,result.toString() ,increased_transactions.toString(),time_enrollment_$.toString(),customerExperience.toString(), compliance_Efficiency.toString(), legal_efficiency.toString(),sustainbility_saving.toString(), total_saving.toString()];
 
makeTable(arr_new,assumptions,curr,thirdSlide);



 //html2pdf().from(res).toPdf().save(arr_new[1][0]+"_"+new Date().toLocaleString());
 console.log(thirdSlide);
 
}
