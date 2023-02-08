import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSinglePin } from '../api/pinData';
import { useAuth } from '../utils/context/authContext';

function PinCard({ pinObj, onUpdate }) {
  const { user } = useAuth();
  const deletePin = () => {
    if (window.confirm(`Delete ${pinObj.name}?`)) {
      deleteSinglePin(pinObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={pinObj.image} alt={pinObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{pinObj.name}</Card.Title>
        {/* DYNAMIC LINK TO VIEW THE PIN DETAILS  */}
        <Link href={`/pin/${pinObj.firebaseKey}`} passHref>
          <Button variant="outline-dark" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE PIN DETAILS  */}
        <Link href={`/pin/edit/${pinObj.firebaseKey}`} passHref>
          {pinObj.uid === user.uid ? (<Button variant="outline-dark" className="m-2">EDIT</Button>) : '' }
        </Link>
        <>
          {pinObj.uid === user.uid ? (
            <Button variant="outline-dark" className="m-2" onClick={deletePin}>
              DELETE
            </Button>
          )
            : ''}
        </>
      </Card.Body>
    </Card>
  );
}

PinCard.propTypes = {
  pinObj: PropTypes.shape({
    board_id: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    isPublic: PropTypes.bool,
    firebaseKey: PropTypes.string,
    url: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PinCard;
