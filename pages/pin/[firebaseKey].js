/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { viewBoardDetails } from '../../api/mergedData';

export default function ViewBoard() {
  const [pinDetails, setPinDetails] = useState({});
  const router = useRouter;

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewBoardDetails(firebaseKey).then(setPinDetails);
  }, [firebaseKey]);

  return (
    <>
      <Head>
        <title> View {pinDetails.name} </title>
      </Head>
      <div>
        <div className="d-flex flex-column">
          <img src={pinDetails.image} alt={pinDetails.name} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>
            {pinDetails.name} by {pinDetails.boardObject?.name} {pinDetails.boardObject?.isPublic ? '🔒' : ''}
          </h5>
          <p>{pinDetails.description || ''}
          </p>
          <hr />
          <p>
            {pinDetails.isPublic ? '🔒' : ''}
          </p>
        </div>
      </div>
    </>

  );
}
