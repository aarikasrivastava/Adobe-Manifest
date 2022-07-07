
function displayContent () {
  value_Added = document.getElementById('value_added').value;
 value_Deducted = document.getElementById('value_deducted').value;
    result = TimeCalculate(value_Added , value_Deducted); 
  document.write(result);



}
