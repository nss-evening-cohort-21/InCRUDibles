import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createBoard, updateBoard } from '../../api/boardData';
import { useAuth } from '../../utils/context/authContext';

const initialStateBF = {
  name: '',
  description: '',
  image: '',
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
      <Form onSubmit={handleSubmit}>
        <h2 className="member-form-text">{obj.firebaseKey ? 'Update' : 'Create'} Board</h2>
        <FloatingLabel
          controlId="floatingInput1"
          label="Board Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput1"
          label="Board Description"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Description"
            name="description"
            value={formInput.description}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput1"
          label="Board Cover Image URL"
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
        <Button type="submit" variant="light">{obj.firebaseKey ? 'Update' : 'Create'}</Button>
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
