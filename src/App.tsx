import React from 'react';
import TableLayout from 'modules/table/components/TableLayout';
import useFetch from 'modules/common/hooks/useFetch';

function App() {
  return (
    <div className='App'>
      <TableLayout {...useFetch('http://localhost:3005/data')} />
    </div>
  );
}

export default App;
