import React from 'react'
import Head from 'next/head'

import AppLayout from 'components/App/Layout';

const Home = () => (
  <React.Fragment>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700,700i&display=swap" rel="stylesheet" />
    </Head>

    <AppLayout>
      Content
    </AppLayout>
  </React.Fragment>
)

export default Home
