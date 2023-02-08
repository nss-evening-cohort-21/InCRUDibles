import React, { useEffect, useState } from 'react';
import { getAllPubBoards } from '../api/boardData';
import BoardCard from '../components/BoardCard';

export default function Community() {
  const [publicBoards, setPublicBoards] = useState([]);

  const getAllPublicBoards = () => {
    getAllPubBoards().then(setPublicBoards);
  };

  useEffect(() => {
    getAllPublicBoards();
  }, []);
  return (
    <div className="public-card-container">
      {publicBoards.map((pubboard) => (
        <BoardCard key={pubboard.firebaseKey} boardObj={pubboard} onUpdate={getAllPublicBoards} />
      ))}
    </div>
  );
}
