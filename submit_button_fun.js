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
              
                Number_of_digital_enrollments = 0.25*data[i][2];
              //calling calculate function
              result = TimeSavingCalculate(data[i][1]);
              increase_transactions= increasedTransactions(data[i][1]);
              time_enrollment_$ = TimeEnrollment$();
              customerExperience = customerExperienceValue(data[i][1]);
              compliance_efficiency= complianceEfficiency();
              legal_efficiency = legacyEfficiency(data[i][1]);
              sustainbility_savings = sustainbilitySaving(data[i][1]);
              total_saving = TotalSavings();
               data[i].push(result); // pushing the result into report
               data[i].push(increase_transactions);
               data[i].push(time_enrollment_$);
               data[i].push(customerExperience);
               data[i].push(compliance_efficiency);
               data[i].push(legal_efficiency);
               data[i].push(sustainbility_savings);
               data[i].push(total_saving);
        //data[i].splice(2,1);

        var assumptions = new Array();
assumptions[0]= [mailingScanningFaxingSaving.toString() , printingScanningFaxingSaving.toString() ,timeSavedTransactions.toString() , timeSavedEnrollment.toString(),averageCompensationTransactions.toString() ,averageCompensationEnrollments.toString() ,reducedDropOffRate.toString() , avgRevenuePerTrans.toString(),avgPagesPerTransaction.toString() , employeesComplianceRegulatory,toString() , hoursSpentEmployeeComplianceRegulatory.toString() , percentReductionComplianceRegulatory.toString() , compensationComplianceRegulatoryStaff.toString() ,percentCostESign.toString()]
              var arr= new Array()
              arr[0]=data[0]
              arr[1]=data[i]
              makeTable(arr,assumptions);
              // html to pdf download
             // html2pdf().from(tbl).toPdf().save(arr[1][0]+"_"+new Date().toLocaleString());
        
     
  
            
         }
        
          
             
          });
  
  
   
    }