import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSinglePin } from '../../../api/pinData';
import PinForm from '../../../components/forms/PinForm';

export default function EditPin() {
  const [editPin, setEditPin] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSinglePin(firebaseKey).then(setEditPin);
  }, [firebaseKey]);

  return (<PinForm obj={editPin} />);
}
