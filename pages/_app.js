import App from 'next/app';
import Head from 'next/head'

import StoreProvider, {useStoreValue} from 'providers/StoreProvider';

export default function ({ Component, pageProps }) {
  return (
    <StoreProvider
      initialState={{
        allSubReddits: [
          {label: 'Funny', slug: 'funny'},
          {label: 'Tech', slug: 'tech'},
          {label: 'Worldnews', slug: 'worldnews'},
        ],
      }}
      reducer={(state, action) => {
        switch (action.type) {
          case 'SUBREDDIT_SET':
            return {
              ...state,
              subReddit: action.subReddit,
            };
        }

        return state;
      }}
    >
      <Head>
        <title>Home</title>
        <link rel='icon' href='/static/favicon.ico' importance='low' />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700,700i&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
