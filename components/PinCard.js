// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Link from 'next/link';
// import { deleteThisPin } from '../api/pinData';

// function PinCard({ pinObj, onUpdate }) {
//   const deletePin = () => {
//     if (window.confirm(`Delete ${pinObj.name}?`)) {
//       deleteThisPin(pinObj.firebaseKey).then(() => onUpdate());
//     }
//   };

//   return (
//     <Card style={{ width: '18rem', margin: '10px' }}>
//       <Card.Img variant="top" src={pinObj.image} alt={pinObj.name} style={{ height: '400px' }} />
//       <Card.Body>
//         <Card.Title>{pinObj.name}</Card.Title>
//         {/* DYNAMIC LINK TO VIEW THE PIN DETAILS  */}
//         <Link href={`/pin/${pinObj.firebaseKey}`} passHref>
//           <Button variant="primary" className="m-2">VIEW</Button>
//         </Link>
//         {/* DYNAMIC LINK TO EDIT THE PIN DETAILS  */}
//         <Link href={`/pin/edit/${pinObj.firebaseKey}`} passHref>
//           <Button variant="info">EDIT</Button>
//         </Link>
//         <Button variant="danger" onClick={deletePin} className="m-2">
//           DELETE
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// }

// PinCard.propTypes = {
//   pinObj: PropTypes.shape({
//     board_id: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     name: PropTypes.string,
//     isPublic: PropTypes.bool,
//     firebaseKey: PropTypes.string,
//     url: PropTypes.string,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

// export default PinCard;
