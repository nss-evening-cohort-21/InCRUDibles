import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { createBoard, updateBoard } from '../../api/boardData';
import { useAuth } from '../../utils/context/authContext';

const initialStateBF = {
  name: '',
  description: '',
  image: '',
  isPublic: false,
};

export default function BoardForm({ obj }) {
  const [formInput, setFormInput] = useState(initialStateBF);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateBoard(formInput)
        .then(() => router.push('/profile'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createBoard(payload).then(({ name }) => {
        const patchPayloadFBK = { firebaseKey: name };
        updateBoard(patchPayloadFBK).then(() => {
          router.push('/profile');
        });
      });
    }
  };

  return (
    <div className="board-form-container">
      <Head><title>{obj.firebaseKey ? `Update ${obj.name} Board` : 'Create Board'}</title></Head>

      <Form onSubmit={handleSubmit}>
        <h2 className="mt-5 text-white text-center">{obj.firebaseKey ? `Update ${obj.name}` : 'Create Board'}</h2>
        <div className="mt-5" />
        <div className="text-white"> Board Name</div>
        <FloatingLabel
          controlId="floatingInput1"
          label="Board Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Board Name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <div className="text-white">Description</div>
        <FloatingLabel
          controlId="floatingInput2"
          label="Board Description"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Description"
            style={{ height: '100px' }}
            name="description"
            value={formInput.description}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <div className="text-white">Board Cover Image URL</div>
        <FloatingLabel
          controlId="floatingInput3"
          label="Image URL"
          className="mb-3"
        >
          <Form.Control
            type="url"
            placeholder="Cover Image URL"
            name="image"
            value={formInput.image}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <Form.Check
          className="text-white mb-3"
          type="switch"
          id="privacy"
          name="isPublic"
          label="Public Board?"
          checked={formInput.isPublic}
          onChange={(e) => {
            setFormInput((prevState) => ({
              ...prevState,
              isPublic: e.target.checked,
            }));
          }}
        />
        <Button type="submit" variant="outline-dark" className="m-2">{obj.firebaseKey ? 'Update' : 'Create'}</Button>
      </Form>
    </div>
  );
}

BoardForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    uid: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    isPublic: PropTypes.bool,
  }),
};

BoardForm.defaultProps = {
  obj: initialStateBF,
};
