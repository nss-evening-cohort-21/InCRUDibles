import { deleteSingleBoard, getPinsByBoard, getSingleBoard } from './boardData';
import { deleteSinglePin } from './pinData';

const viewBoardDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBoard(firebaseKey).then((board) => {
    getPinsByBoard(board.firebaseKey)
      .then((boardPins) => resolve({ ...board, boardPins }));
  }).catch(reject);
});

const deleteBoardPins = (boardId) => new Promise((resolve, reject) => {
  getPinsByBoard(boardId).then((pinsArray) => {
    console.warn(pinsArray, 'Board Pins');
    const deletePinPromises = pinsArray.map((pin) => deleteSinglePin(pin.firebaseKey));

    Promise.all(deletePinPromises).then(() => {
      deleteSingleBoard(boardId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewBoardDetails, deleteBoardPins };
