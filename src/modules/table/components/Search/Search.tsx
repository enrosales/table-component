import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchingValue } from 'actions/tableActions';

export default function Search() {
  const [search, setSearch] = useState('');
  const input = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (search === input.current?.value) {
        dispatch(setSearchingValue(search));
      }
    }, 1000);
  }, [search, dispatch]);

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
