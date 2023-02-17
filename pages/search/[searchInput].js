/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getPins } from '../../api/pinData';
import PinCard from '../../components/PinCard';
import { useAuth } from '../../utils/context/authContext';

export default function SearchResult() {
  const [searchResults, setSearchResults] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { searchInput } = router.query;

  const getSearchResults = () => {
    getPins(user.uid).then((searchResultsArray) => {
      const filterResults = searchResultsArray.filter((pins) => pins.name.toLowerCase().includes(searchInput)
      || pins.description.toLowerCase().includes(searchInput)
      || pins.board_id.toLowerCase().includes(searchInput));
      setSearchResults(filterResults);
    });
  };

  useEffect(() => {
    getSearchResults();
    return () => {
      setSearchResults([]);
    };
  }, [searchInput]);
  return (
    <div>
      <div className="d-flex flex-wrap">
        {searchResults.map((obj) => (
          <PinCard key={obj.firebaseKey} pinObj={obj} onUpdate={getSearchResults} />
        ))}
      </div>
    </div>
  );
}
