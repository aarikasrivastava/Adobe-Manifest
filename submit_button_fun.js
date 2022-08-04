  // function to submit the excel file for calculation
  function myFunction(){

      readXlsxFile(excel_file.files[0]).then (function(data){
            //console.log(data);
            data[0].push("Time/Enrollment Saving");
            data[0].push("Incerease in Transaction");
            data[0].push("Time/Enrollment($)");
            data[0].push("Customer Experience Value");
            data[0].push("Compliance Efficiency");
            data[0].push("Legal Efficiency");
            data[0].push("Sustainbility Savings");
            data[0].push("Total Savings");
      //data[0].splice(2,1);
            
            for  (i= 1 ; i<data.length ; i++){
              customer_name = data[i][0];
              annual_transaction = data[i][1];
                Number_of_digital_enrollments = 0.25*data[i][1];
              //calling calculate function
              result = TimeSavingCalculate(data[i][1]);
              increase_transactions= increasedTransactions(data[i][1]);
              time_enrollment_$ = TimeEnrollment$();
              customerExperience = customerExperienceValue(data[i][1]);
              compliance_efficiency= complianceEfficiency();
              legal_efficiency = legacyEfficiency(data[i][1]);
              sustainbility_savings = sustainbilitySaving(data[i][1]);
              total_saving = TotalSavings();
              /* data[i].push(result.toString()); // pushing the result into report
               data[i].push(increase_transactions.toString());
               data[i].push(time_enrollment_$).toString();
               data[i].push(customerExperience.toString());
               data[i].push(compliance_efficiency.toString());
               data[i].push(legal_efficiency.toString());
               data[i].push(sustainbility_savings.toString());
               data[i].push(total_saving.toString());*/
        //data[i].splice(2,1);
                  var curr = "USD"
       /* var assumptions = new Array();
assumptions[0]= [mailingScanningFaxingSaving.toString() , printingScanningFaxingSaving.toString() ,
      timeSavedTransactions.toString() , timeSavedEnrollment.toString(),
      averageCompensationTransactions.toString() ,averageCompensationEnrollments.toString() ,
      reducedDropOffRate.toString() , avgRevenuePerTrans.toString(),avgPagesPerTransaction.toString() ,
       employeesComplianceRegulatory.toString() , hoursSpentEmployeeComplianceRegulatory.toString() , 
       percentReductionComplianceRegulatory.toString() , compensationComplianceRegulatoryStaff.toString() ,percentCostESign.toString()];*/
              
       
       var assumptions = new Array();
       assumptions[0]= [totalDigitalEnrollment.toString(), mailingScanningFaxingSaving.toString() , printingScanningFaxingSaving.toString() ,
         timeSavedTransactions.toString() , timeSavedEnrollment.toString(),averageCompensationTransactions.toString() 
       ,averageCompensationEnrollments.toString() ,reducedDropOffRate.toString() , avgRevenuePerTrans.toString(),
       avgPagesPerTransaction.toString() , employeesComplianceRegulatory.toString() , hoursSpentEmployeeComplianceRegulatory.toString() ,
        percentReductionComplianceRegulatory.toString() , compensationComplianceRegulatoryStaff.toString() ,percentCostESign.toString()]    
       
       
       var arr= new Array();
              arr[0]=data[0];
             // arr[1]=data[i]
arr[1]=[customer_name, annual_transaction.toString() ,result.toString() ,increase_transactions.toString(),time_enrollment_$.toString(),customerExperience.toString(), compliance_efficiency.toString(), legal_efficiency.toString(),sustainbility_savings.toString(), total_saving.toString()];
              factor= annual_transaction/10 ; 
              amount = currency*factor;
var thirdSlide = new Array();
thirdSlide[0]=[(factor*gallonsOfWater).toFixed(1).toString(),(factor * EquivalentOfLoadsOfLaundry).toFixed(1).toString(),
      (factor * PoundsOfWood).toFixed(1).toString(),(factor * EquivalentOfTrees).toFixed(1).toString(),(factor * PoundsOfWaste).toFixed(1).toString(),(factor * EquivalentOfReamsOfPaper).toFixed(1).toString(),
      (factor * PoundsOfGreenhouseGasses).toFixed(1).toString(),(factor * EquivalentOfDaysOfDrivingYourCar).toFixed(1).toString(),(factor * KWHoursOfTotalEnergy).toFixed(1).toString(),(factor*EquivalentOfDaysOfRefrigeratorUse).toFixed(1).toString(),annual_transaction.toString(),amount.toFixed(1).toString()];
            console.log(arr);
            console.log(assumptions);
            console.log(thirdSlide);
        
            makeTable(arr,assumptions,curr,thirdSlide);
  
            
         }
        
          
             
          });
  
  
   
    }