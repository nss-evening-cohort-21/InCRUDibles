import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getPinsByBoard } from '../api/boardData';
import { viewBoardDetails } from '../api/mergedData';
import { useAuth } from '../utils/context/authContext';
import PinCard from './PinCard';

export default function ViewYourPins() {
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

  if (user.uid === boardDetails.uid) {
    return (
      <div className="d-flex flex-wrap">
        {boardDetails.boardPins?.map((pin) => (
          <PinCard key={pin.firebaseKey} pinObj={pin} onUpdate={getAllPinsByBoard} />
        ))}
      </div>
    );
  }
  return (
    <div className="d-flex flex-wrap">
      {boardDetails.boardPins?.filter((pin) => pin.isPublic).map((pin) => (
        <PinCard key={pin.firebaseKey} pinObj={pin} onUpdate={getAllPinsByBoard} />
      ))}
    </div>
  );
}
