  // function to submit the excel file for calculation
  function myFunction(){

    readXlsxFile(excel_file.files[0]).then (function(data){
      //console.log(data);
      data[0].push("Result");
data[0].splice(2,2);
      
      for  (i= 1 ; i<data.length ; i++){
        
        //calling calculate function
        result = TimeSavingCalculate(data[i][2],data[i][3]);
         data[i].push(result); // pushing the result into report
        
  data[i].splice(2,2);
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