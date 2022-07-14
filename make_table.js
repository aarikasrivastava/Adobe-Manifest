function makeTable(array) 
{
   

  document.getElementById("totalFinancialImpact").innerHTML=array[1][9];
  document.getElementById('Sustainability Saving').innerHTML=array[1][8]
  document.getElementById("TEout").innerHTML=array[1][2];
  document.getElementById("CLout").innerHTML=array[1][6]+"/"+ array[1][7];
  document.getElementById("ITout").innerHTML=array[1][3];
  document.getElementById("CEout").innerHTML=array[1][5];
  document.getElementById("TESout").innerHTML=array[1][4];
  var rep=document.getElementById("report").innerHTML;

  return rep;

}
