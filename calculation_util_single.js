var totalDigitalEnrollment1 = 25;
var timeSavedTransactions1 = 1;
var timeSavedEnrollment1 = 2;
var percentDigitalEnrollmentTransactions1 = 5;
var printingScanningFaxingSaving1 = 1.50;
var mailingScanningFaxingSaving1 = 8;
var averageCompensationTransactions1 = 40;
var averageCompensationEnrollments1 = 25;

var reducedDropOffRate1 = 50;
var avgRevenuePerTrans1 = 500;
var avgPagesPerTransaction1 = 10;
var employeesComplianceRegulatory1 = 10;
var hoursSpentEmployeeComplianceRegulatory1 = 20;
var percentReductionComplianceRegulatory1 = 25;
var compensationComplianceRegulatoryStaff1 = 60;
var percentCostESign1 = 25;


var USDtoGBP1=0.766;
var USDtoAUD1=1.345;
var USDtoEURO1=0.918;

document.getElementById("digitalEnrollmentTransactions").value =totalDigitalEnrollment1;
document.getElementById("timeSavedTransactions").value=timeSavedTransactions1;
document.getElementById("timeSavedEnrollment").value=timeSavedEnrollment1;
// document.getElementById("percentDigitalEnrollmentTransactions").value=percentDigitalEnrollmentTransactions1;
document.getElementById("printingScanningFaxingSaving").value=printingScanningFaxingSaving1;
document.getElementById("mailingScanningFaxingSaving").value=mailingScanningFaxingSaving1;
document.getElementById("averageCompensationTransactions").value=averageCompensationTransactions1;
document.getElementById("averageCompensationEnrollments").value=averageCompensationEnrollments1;

document.getElementById("reducedDropOffRate").value=reducedDropOffRate1;
document.getElementById("avgRevenuePerTrans").value=avgRevenuePerTrans1;
document.getElementById("avgPagesPerTransaction").value=avgPagesPerTransaction1;
document.getElementById("employeesComplianceRegulatory").value=employeesComplianceRegulatory1;
document.getElementById("hoursSpentEmployeeComplianceRegulatory").value=hoursSpentEmployeeComplianceRegulatory1;
document.getElementById("percentReductionComplianceRegulatory").value=percentReductionComplianceRegulatory1;
document.getElementById("compensationComplianceRegulatoryStaff").value=compensationComplianceRegulatoryStaff1;
document.getElementById("percentCostESign").value=percentCostESign1;



document.getElementById("USDtoGBP").value=USDtoGBP1;
document.getElementById("USDtoAUD").value=USDtoAUD1;
document.getElementById("USDtoEURO").value=USDtoEURO1;
function Usd(){
    document.getElementById("mailingScanningFaxingSaving").value=(mailingScanningFaxingSaving1 ).toFixed() ; 
    document.getElementById("printingScanningFaxingSaving").value=(printingScanningFaxingSaving1 ).toFixed(2);
    document.getElementById("averageCompensationTransactions").value= (averageCompensationTransactions1 ).toFixed();
    document.getElementById("averageCompensationEnrollments").value=(averageCompensationEnrollments1 ) .toFixed();
    document.getElementById("avgRevenuePerTrans").value=(avgRevenuePerTrans1).toFixed();
    document.getElementById("compensationComplianceRegulatoryStaff").value=(compensationComplianceRegulatoryStaff1).toFixed();
    
}
function Aud() {
    USDtoAUD1 = document.getElementById("USDtoAUD").value;
    document.getElementById("mailingScanningFaxingSaving").value=(mailingScanningFaxingSaving1 * USDtoAUD1).toFixed() ; 
    document.getElementById("printingScanningFaxingSaving").value=(printingScanningFaxingSaving1 * USDtoAUD1).toFixed(2);
    document.getElementById("averageCompensationTransactions").value= (averageCompensationTransactions1 * USDtoAUD1).toFixed();
    document.getElementById("averageCompensationEnrollments").value=(averageCompensationEnrollments1 * USDtoAUD1) .toFixed();
    document.getElementById("avgRevenuePerTrans").value=(avgRevenuePerTrans1*USDtoAUD1).toFixed();
    document.getElementById("compensationComplianceRegulatoryStaff").value=(compensationComplianceRegulatoryStaff1*USDtoAUD1).toFixed();
    
}

function Gbp() {
    USDtoGBP1=document.getElementById("USDtoGBP").value;
    document.getElementById("mailingScanningFaxingSaving").value=(mailingScanningFaxingSaving1 * USDtoGBP1).toFixed() ; 
    document.getElementById("printingScanningFaxingSaving").value=(printingScanningFaxingSaving1 * USDtoGBP1).toFixed(2);
    document.getElementById("averageCompensationTransactions").value= (averageCompensationTransactions1 * USDtoGBP1).toFixed();
    document.getElementById("averageCompensationEnrollments").value=(averageCompensationEnrollments1 * USDtoGBP1) .toFixed();
    document.getElementById("avgRevenuePerTrans").value=(avgRevenuePerTrans1*USDtoGBP1).toFixed();
    document.getElementById("compensationComplianceRegulatoryStaff").value=(compensationComplianceRegulatoryStaff1*USDtoGBP1).toFixed();
    
}

function Euro(){
    USDtoEURO1 =document.getElementById("USDtoEURO").value;
    document.getElementById("mailingScanningFaxingSaving").value=(mailingScanningFaxingSaving1 * USDtoEURO1).toFixed() ; 
    document.getElementById("printingScanningFaxingSaving").value=(printingScanningFaxingSaving1 * USDtoEURO1).toFixed(2);
    document.getElementById("averageCompensationTransactions").value= (averageCompensationTransactions1 * USDtoEURO1).toFixed();
    document.getElementById("averageCompensationEnrollments").value=(averageCompensationEnrollments1 * USDtoEURO1) .toFixed();
    document.getElementById("avgRevenuePerTrans").value=(avgRevenuePerTrans1*USDtoEURO1).toFixed();
    document.getElementById("compensationComplianceRegulatoryStaff").value=(compensationComplianceRegulatoryStaff1*USDtoEURO1).toFixed();
    

}