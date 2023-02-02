import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SearchBoard() {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const handleSubmit = () => {
    if (searchInput !== '') router.push(`/search/${searchInput}`);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} id="searchBar">
        <input className="form-control" type="text" placeholder="Search your pins" onChange={handleChange} value={searchInput} />
        <Button variant="success" type="submit" size="sm">search</Button>
      </Form>
    </div>
  );
}
