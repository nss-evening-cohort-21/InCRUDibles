/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { viewPinDetails } from '../../api/mergedData';

export default function ViewPin() {
  const [pinDetails, setPinDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewPinDetails(firebaseKey).then(setPinDetails);
  }, [firebaseKey]);

  return (
    <>
      <Head>
        <title> View {pinDetails.name} </title>
      </Head>
      <div className="PD-container">
        <div className="PD-photo-container">
          <a href={pinDetails.url} target="_tab"><img className="PD-photo" src={pinDetails.image} alt={pinDetails.name} /></a>
        </div>
        <div className="PD-detail-container">
          <h5 className="PD-pin-name">
            {pinDetails.name}
          </h5>
          <hr />
          <p className="PD-desc">{pinDetails.description || ''}
          </p>
          <hr />
          <p className="PD-lock">
            {pinDetails.isPublic ? '🔓' : '🔒'}
          </p>
        </div>
      </div>
    </>

  );
}
