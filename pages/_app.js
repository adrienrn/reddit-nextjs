import App from 'next/app';
import Head from 'next/head'

import RedditProvider from 'providers/RedditProvider';
import StoreProvider, {useStoreValue} from 'providers/StoreProvider';

export default function ({ Component, pageProps }) {
  return (
    <StoreProvider
      initialState={{
        subReddits: [
          {label: 'Funny', slug: 'funny'},
          {label: 'Tech', slug: 'tech'},
          {label: 'Worldnews', slug: 'worldnews'},
        ],
      }}
      reducer={(state, action) => {
        switch (action.type) {
          case 'SUBREDDIT_ADD':
            const sameSubReddits = state.subReddits.filter((subReddit) => (subReddit.slug === action.subReddit.slug));

            if (sameSubReddits.length) {
              // Don't add subReddit if it already exists.
              return state;
            }

            return {
              ...state,
              subReddits: [...state.subReddits, action.subReddit],
            };
          case 'SUBREDDIT_REMOVE':
            let subRedditIndex = -1;
            state.subReddits.forEach((subReddit, index) => {
              if (subReddit.slug === action.subReddit.slug) {
                subRedditIndex = index;

                return;
              }
            });

            if (-1 === subRedditIndex) {
              return state;
            }

            const newValue = [...state.subReddits];
            newValue.splice(subRedditIndex, 1);

            return {
              ...state,
              subReddits: [...newValue],
            }
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
        <link rel='icon' href='/static/favicon.ico' importance='low' />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700,700i&display=swap" rel="stylesheet" />
      </Head>
      <RedditProvider>
        <Component {...pageProps} />
      </RedditProvider>
    </StoreProvider>
  );
}
