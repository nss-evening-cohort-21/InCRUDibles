import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { viewBoardDetails } from '../../api/mergedData';
import { getPinsByBoard } from '../../api/boardData';
import PinCard from '../../components/PinCard';
import { useAuth } from '../../utils/context/authContext';

export default function ViewBoard() {
  const [boardDetails, setBoardDetails] = useState({});
  const router = useRouter();
  const { user } = useAuth();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewBoardDetails(firebaseKey).then(setBoardDetails);
  }, [firebaseKey]);

  const getAllPinsByBoard = () => {
    getPinsByBoard(firebaseKey);
  };

  return (

    <div className="BD-container">
      <div className="BD-detail-cont">
        <div className="BD-name-cont"><h2 className="BD-name">{boardDetails.name}</h2></div>
        <div className="BD-desc-cont"><h5 className="BD-description">{boardDetails.description}</h5></div>
        <div className="BD-edit-cont">
          <Link href={`edit/${boardDetails.firebaseKey}`} passHref>
            {boardDetails.uid === user.uid ? (<Button variant="dark" className="m-2">Edit {boardDetails.name} </Button>) : '' }
          </Link>
        </div>
      </div>
      <div className="BD-pin-container">
        {boardDetails.boardPins?.map((pin) => (
          <PinCard key={pin.firebaseKey} pinObj={pin} onUpdate={getAllPinsByBoard} />
        ))}
      </div>

    </div>
  );
}
