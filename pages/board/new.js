import Head from 'next/head';
import React from 'react';
import BoardForm from '../../components/forms/BoardForm';

export default function CreateBoard() {
  return (
    <>
      <Head>
        <title>Add New Board</title>
      </Head>
      <BoardForm />
    </>
  );
}
