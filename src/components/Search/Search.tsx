import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSearchingValue } from '../../actions/tableActions';

type Props = {
  setSearchingValue: (search: string) => void;
};

function Search(props: Props) {
  const [search, setSearch] = useState('');
  const input = useRef<HTMLInputElement | null>(null);
  const { setSearchingValue } = props;

  useEffect(() => {
    setTimeout(() => {
      if (search === input.current?.value) {
        setSearchingValue(search);
      }
    }, 1000);
  }, [search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <input
      type='text'
      id='myInput'
      value={search}
      ref={input}
      onChange={handleChange}
      placeholder='Search for names...'
    />
  );
}

export default connect(null, { setSearchingValue })(Search);
