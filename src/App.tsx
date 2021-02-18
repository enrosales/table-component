import React from 'react';
import TableLayout from 'modules/table/components/TableLayout';
import useRows from 'modules/table/hooks/useRows';

function App() {
  return (
    <div className='App'>
      <TableLayout {...useRows('http://localhost:3005/data')} />
    </div>
  );
}

export default App;
