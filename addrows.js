function add(){
    var table=document.getElementById('addRows');
    
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";

    row.insertCell(col1);
    row.insertCell(col2);

    document.getElementById('addRows').appendChild(row);
}