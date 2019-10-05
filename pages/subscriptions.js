import React from 'react'
import Head from 'next/head'

import AppLayout from 'components/App/Layout';

const Subscriptions = () => (
  <React.Fragment>
    <Head>
      <title>Subscriptions 2</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700,700i&display=swap" rel="stylesheet" />
    </Head>

    <AppLayout>
      Subscriptions
    </AppLayout>
  </React.Fragment>
)

export default Subscriptions
