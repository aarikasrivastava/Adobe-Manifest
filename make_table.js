function makeTable(array) 
{
  var div=document.createElement('div');
  var hd=document.createElement('h1');
  var center=document.createElement('center')
  var br=document.createElement('br');
  hd.textContent="Value Realisation Report";
  center.appendChild(hd);
  div.appendChild(center);
  div.appendChild(br);
  

  var table = document.createElement('table');
  table.setAttribute("border","2");
  table.setAttribute("align","center");
  for (var i = 0; i < array.length; i++) {
    var row = document.createElement('tr');
      for (var j = 0; j < array[i].length; j++) {
        var cell = document.createElement('td');
        cell.textContent = array[i][j];
        row.appendChild(cell);
      }
    table.appendChild(row);
  }
  div.appendChild(table);
  return div;
}