import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleBoard } from '../../../api/boardData';
import BoardForm from '../../../components/forms/BoardForm';

export default function UpdateBoard() {
  const [editBoard, setEditBoard] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    console.warn(firebaseKey);
    // console.warn(getSingleBoard(firebaseKey));
    getSingleBoard(firebaseKey).then(setEditBoard);
  }, [firebaseKey]);

  return (
    <>
      <Head>
        <title>Update Board</title>

      </Head><BoardForm obj={editBoard} />
    </>
  );
}
