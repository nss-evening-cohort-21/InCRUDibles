import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteSingleBoard } from '../api/boardData';

export default function BoardCard({ boardObj, onUpdate }) {
  const deleteThisBoard = () => {
    if (window.confirm(`Delete ${boardObj.name}?`)) {
      deleteSingleBoard(boardObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={boardObj.image} alt={boardObj.name} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>{boardObj.name}</Card.Title>
          <p className="card-text bold">{boardObj.isPublic && <span>Public<br /></span> } </p>
          <Card.Body>{boardObj.description}</Card.Body>
        </Card.Body>
        <Link href={`/board/${boardObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/board/edit/${boardObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisBoard} className="m-2">
          DELETE
        </Button>
      </Card>
    </div>
  );
}

BoardCard.propTypes = {
  boardObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    isPublic: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
