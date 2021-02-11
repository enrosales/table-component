import React from 'react';
import { connect } from 'react-redux';
import { setStartValue } from '../../actions/tableActions';
import { orderArray, filterRows } from '../../utils';

type Props = {
  rows: any[];
  entries: number;
  start: number;
  setStartValue: (start: number) => void;
  search: string;
};

const renderButtons = (
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

const resultsIndicator = (
  totalRows: number,
  start: number,
  entries: number
) => {
  return (
    <p>
      Showing {start === 0 ? 1 : start + 1} to{' '}
      {start + entries <= totalRows ? start + entries : totalRows} of{' '}
      {totalRows} entries
    </p>
  );
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

function Pagination(props: Props) {
  const { rows, entries, start, setStartValue, search } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const clickedPageNumber = Number(e.currentTarget.innerText);
    setStartValue((clickedPageNumber - 1) * entries);
  };

  const handlePrevious = () => {
    setStartValue(start - entries);
  };

  const handleNext = () => {
    setStartValue(start + entries);
  };
  let rowsToShow = rows;
  if (search) {
    rowsToShow = filterRows(rows, search);
  }
  return (
    <div className='pagination'>
      <div className='resultsIndicator'>
        {resultsIndicator(rowsToShow.length, start, entries)}
      </div>
      <div className='buttonsPage'>
        <button disabled={start === 0 ? true : false} onClick={handlePrevious}>
          Previous
        </button>
        {renderButtons(rowsToShow.length, entries, start, handleClick)}
        <button
          disabled={start + entries >= rowsToShow.length ? true : false}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  rows: state.data.rows,
  entries: state.data.entries,
  start: state.data.start,
  search: state.data.search,
});

export default connect(mapStateToProps, { setStartValue })(Pagination);
