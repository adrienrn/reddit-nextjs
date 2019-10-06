import React, {useEffect} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import AppLayout from 'components/App/Layout';
import {Section, SectionBlock} from 'components/Section';
import SubRedditFilter from 'containers/SubredditFilter';
import PostList from 'containers/PostList';
import RedditProvider from 'providers/RedditProvider';
import {useStoreValue} from 'providers/StoreProvider';

const Home = () => {
  const [store, dispatch] = useStoreValue();
  const router = useRouter();
  const {subReddit} = router.query;

  useEffect(() => {
    let activeSubReddit = store.subReddits[0];
    if (subReddit) {
      activeSubReddit = (store.subReddits.filter((s) => (s.slug === subReddit)))[0];
    }

    dispatch({type: 'SUBREDDIT_SET', subReddit: activeSubReddit});
  }, [subReddit])

  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>

      <AppLayout>
        <Section>
          <SectionBlock>
            <SubRedditFilter />
          </SectionBlock>
        </Section>
        <PostList />
      </AppLayout>
    </React.Fragment>
  );
}

export default Home

