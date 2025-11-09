function insert_Row() {
    //Write your code here
  const table = document.querySelector('#sampleTable')
	const tRow = document.createElement('tr');
		 tRow.innerHTML = `<td>New Cell1</td>
			 <td>NewCell2</td>`;
	table.prepend(tRow)

 
}
