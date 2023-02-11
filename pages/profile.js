/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getBoards } from '../api/boardData';
import BoardCard from '../components/BoardCard';
import UserProfile from '../components/UserProfile';
import { useAuth } from '../utils/context/authContext';

export default function ProfilePage() {
  const [boards, setBoards] = useState([]);
  const { user } = useAuth();

  const getAllTheBoards = () => {
    getBoards(user.uid).then(setBoards);
  };

  useEffect(() => {
    getAllTheBoards();
  }, []);
  return (
    <>
      <div><UserProfile /></div>
      <div className="d-flex flex-wrap" id="profilepins">
        {boards.map((board) => (
          <BoardCard key={board.firebaseKey} boardObj={board} onUpdate={getAllTheBoards} />
        ))}
      </div>
    </>
  );
}
