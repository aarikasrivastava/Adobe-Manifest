  // function to submit the excel file for calculation
  function myFunction(){

    readXlsxFile(excel_file.files[0]).then (function(data){
          //console.log(data);
          data[0].push("Difference");
          
          for  (i= 1 ; i<data.length ; i++){
            //calling calculate function
            result = calculate(data[i][(data[i].length-1)],data[i][(data[i].length-2)]);
             data[i].push(result); // pushing the result into report
         
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