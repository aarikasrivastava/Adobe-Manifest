  // function to submit the excel file for calculation
  function myFunction(){

      readXlsxFile(excel_file.files[0]).then (function(data){
            //console.log(data);
            data[0].push("Time/Enrollment Saving");
            data[0].push("Incerease in Transaction");
            data[0].push("Time/Enrollment($)");
            data[0].push("Customer Experience Value");
            data[0].push("Compliance Efficiency");
      data[0].splice(2,1);
            
            for  (i= 1 ; i<data.length ; i++){
              
                Number_of_digital_enrollments = 0.25*data[i][2];
              //calling calculate function
              result = TimeSavingCalculate(data[i][2]);
              increase_transactions= increasedTransactions(data[i][2]);
              time_enrollment_$ = TimeEnrollment$();
              customerExperience = customerExperienceValue(data[i][2]);
              compliance_efficiency= complianceEfficiency();
               data[i].push(result); // pushing the result into report
               data[i].push(increase_transactions);
               data[i].push(time_enrollment_$);
               data[i].push(customerExperience);
               data[i].push(compliance_efficiency);
        data[i].splice(2,1);
              var arr= new Array()
              arr[0]=data[0]
              arr[1]=data[i]
              tbl=makeTable(arr);
              // html to pdf download
              html2pdf().from(tbl).toPdf().save(arr[1][0]);
         console.log(result);
     
  
            
         }
        
          
             
          });
  
  
   
    }