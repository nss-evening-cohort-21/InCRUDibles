import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';
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
    <div>
      <div>
        <Card style={{ width: '50rem' }}>
          <Card.Img variant="top" src={boardDetails.image} />
          <Card.Body>
            <Card.Title>{`${boardDetails.name}`}</Card.Title>
            <Card.Text>{boardDetails.description}</Card.Text>
            <Link href={`edit/${boardDetails.firebaseKey}`} passHref>
              {boardDetails.uid === user.uid ? (<Button variant="outline-dark" className="m-2">Edit</Button>) : '' }
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div>
        {boardDetails.boardPins?.map((pin) => (
          <PinCard key={pin.firebaseKey} pinObj={pin} onUpdate={getAllPinsByBoard} />
        ))}
      </div>
    </div>
  );
}
