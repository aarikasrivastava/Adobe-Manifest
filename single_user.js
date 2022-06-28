
function displayContent () {
  value_Added = document.getElementById('value_added').value;
 value_Deducted = document.getElementById('value_deducted').value;
    result = calculate(value_Added , value_Deducted); 
  console.log(result);
}
