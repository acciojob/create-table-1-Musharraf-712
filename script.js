function insert_Row() {
  const table = document.querySelector('#sampleTable');
  
  // insert a new row at position 0 (top)
  const newRow = table.insertRow(0);

  // insert first cell
  const cell1 = newRow.insertCell(0);
  cell1.innerText = "New Cell1";

  // insert second cell
  const cell2 = newRow.insertCell(1);
  cell2.innerText = "New Cell2";
}
