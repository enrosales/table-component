import React from 'react';

//#region Table Creators Methods
function createTableHeaders(rows: any[]) {
  return Object.keys(rows[0]).map((item, index) => (
    <th onClick={() => sortTable(index)} key={item}>
      {item}
    </th>
  ));
}

function createTableRow(row: any) {
  return Object.keys(row).map(key => <td key={key}>{row[key]}</td>);
}

//Example of one row
//{name: "Eduardo", position: "Programador", office: "Cerro", age: 32, startDate: "2011/11/28"}
function createTableBody(rows: any[]) {
  return rows.map((row, index) => {
    const tdValues = createTableRow(row);
    return <tr key={index}>{tdValues}</tr>;
  });
}

export function createTable(rows: any[], start: number, entries: number) {
  const newRows = rows.slice(start, start + entries);
  return (
    newRows.length > 0 && (
      <>
        <table id='myTable'>
          <thead>
            <tr>{createTableHeaders(newRows)}</tr>
          </thead>
          <tbody>{createTableBody(newRows)}</tbody>
          <tfoot>
            <tr>{createTableHeaders(newRows)}</tr>
          </tfoot>
        </table>
      </>
    )
  );
}
//#endregion

//#region table operations
export const filterRows = (rows: any[], search: string) => {
  if (!search) return rows;
  return rows.filter(row => {
    const keys = Object.keys(row);
    const firstKey = keys[0];
    return String(row[firstKey].toLowerCase()).includes(search.toLowerCase());
  });
};

function sortTable(columnIndex: number) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById('myTable') as HTMLTableElement;

  switching = true;
  //Set the sorting direction to ascending:
  dir = 'asc';
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers and the last that contains the table footer):*/
    for (i = 1; i < rows.length - 2; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName('TD')[columnIndex];
      y = rows[i + 1].getElementsByTagName('TD')[columnIndex];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir === 'asc') {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir === 'desc') {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode?.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount === 0 && dir === 'asc') {
        dir = 'desc';
        switching = true;
      }
    }
  }
}
//#endregion

//#region Pagination methods
//Method for render the buttons of the pagination table
export const renderButtons = (
  rows: number,
  entries: number,
  start: number,
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
) => {
  const numberOfButtonsToShow = 10;
  const activePage = start / entries + 1;
  const totalButtons = Math.ceil(rows / entries);
  //can write all the buttons at the first time
  if (totalButtons < numberOfButtonsToShow) {
    const buttonsNames = [];
    for (let index = 1; index <= totalButtons; index++) {
      buttonsNames.push(index);
    }
    return listButtons(buttonsNames, handleClick, activePage);
  } else {
    const buttonsNames: number[] = [];
    buttonsNames.push(activePage);
    let leftCounter = 1;
    //trying to write 5 buttons left to the activePage
    while (activePage - leftCounter > 0 && buttonsNames.length <= 5) {
      buttonsNames.push(activePage - leftCounter++);
    }
    let rigthCounter = 1;
    //trying to write buttons right to the activePage
    while (
      buttonsNames.length < 10 &&
      activePage + rigthCounter <= totalButtons
    ) {
      buttonsNames.push(activePage + rigthCounter++);
    }
    while (buttonsNames.length < 10) {
      /* If no more right buttons and can have more than 5 buttons left */
      buttonsNames.push(activePage - leftCounter++);
    }
    orderArray(buttonsNames);
    return listButtons(buttonsNames, handleClick, activePage);
  }
};

const listButtons = (
  buttonsNames: number[],
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  activePage: number
) => {
  return buttonsNames.map(btnName => (
    <button
      className={activePage === btnName ? 'active' : ''}
      key={btnName}
      onClick={e => handleClick(e)}
    >
      {btnName}
    </button>
  ));
};
//#endregion

//#region  order Array Methods
export const orderArray = (arr: number[]) => arr.sort((a, b) => a - b);
//#endregion
