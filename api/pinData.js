import client from '../utils/client';

const dbUrl = client.databaseURL;

// FIXME:  GET ALL PIN
const getPins = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/pins.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// FIXME: CREATE PIN
const createPin = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/pins.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// FIXME: GET SINGLE PIN
const getSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/pins/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// FIXME: DELETE PIN
const deleteSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/pins/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// FIXME: UPDATE PIN
const updatePin = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/pins/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getPins,
  getSinglePin,
  deleteSinglePin,
  updatePin,
  createPin,
};
