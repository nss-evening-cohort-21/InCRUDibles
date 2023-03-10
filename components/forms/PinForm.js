import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Head from 'next/head';
import { useAuth } from '../../utils/context/authContext';
import { getBoards } from '../../api/boardData';
import { createPin, updatePin } from '../../api/pinData';

// these have to match the name "" in the form input
const initialState = {
  description: '',
  name: '',
  image: '',
  isPublic: false,
  url: '',
};

function PinForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [boards, setBoards] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getBoards(user.uid).then(setBoards);
    // conditional for UPDATE/EDIT
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    console.warn('handleChange');
    const { name, value } = e.target;
    console.warn('name, value', name, value);
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updatePin(formInput)
        .then(() => router.push(`/pin/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createPin(payload).then(({ name }) => {
        const patchPayloadFBK = { firebaseKey: name };
        updatePin(patchPayloadFBK).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <>
      <Head><title>{obj.firebaseKey ? `Update ${obj.name} Pin` : 'Create Pin'}</title></Head>

      <Form onSubmit={handleSubmit} className="text-color-drkblu">
        <h2 className="mt-5 text-center">{obj.firebaseKey ? 'Update' : 'Create'} Pin</h2>
        <div className="mt-5" />
        {/* name */}
        <div className="">Name</div>
        <FloatingLabel controlId="floatingInput1" label="Pin Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter a name..."
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* URL  */}
        <div className="">Website</div>
        <FloatingLabel controlId="floatingInput3" label="Pin's Website" className="mb-3">
          <Form.Control
            type="url"
            placeholder="website"
            name="url"
            value={formInput.url}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* Board SELECT */}
        <div className="">Select Board</div>
        <FloatingLabel controlId="floatingSelect" label="Board">
          <Form.Select
            placeholder="Pick a Board"
            aria-label="Board"
            name="board_id"
            onChange={handleChange}
            className="mb-3"
            value={formInput.board_id}
            required
          >
            <option value="">Select a Board</option>
            {boards.map((board) => (
              <option
                key={board.firebaseKey}
                value={board.firebaseKey}
              >
                {board.name}
              </option>
            ))}
          </Form.Select>
        </FloatingLabel>

        {/* IMAGE INPUT  */}
        <div className="">Image URL</div>
        <FloatingLabel controlId="floatingInput2" label="Pin Image Url" className="mb-3">
          <Form.Control
            type="url"
            placeholder="Enter an image url"
            name="image"
            value={formInput.image}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* DESCRIPTION TEXTAREA  */}
        <div className="">Description</div>
        <FloatingLabel controlId="floatingTextarea" label="Pin Description" className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Description"
            style={{ height: '100px' }}
            name="description"
            value={formInput.description}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* isPublic: TOGGLES/RADIOS */}
        <Form.Check
          className="mb-3"
          type="switch"
          id="isPublic"
          name="isPublic"
          label="Is Public?"
          checked={formInput.isPublic}
          onChange={(e) => {
            setFormInput((prevState) => ({
              ...prevState,
              isPublic: e.target.checked,
            }));
          }}
        />

        {/* SUBMIT BUTTON  */}
        <Button variant="outline-dark" className="m-2 text-color-drkblu" type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Pin</Button>
      </Form>
    </>
  );
}

PinForm.propTypes = {
  obj: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    isPublic: PropTypes.bool,
    url: PropTypes.string,
    board_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

PinForm.defaultProps = {
  obj: initialState,
};

export default PinForm;
