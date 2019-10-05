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
    dispatch({type: 'SUBREDDIT_SET', subReddit: subReddit});
  }, [subReddit])

  return (
    <RedditProvider>
      <Head>
        <title>Home</title>
      </Head>

      <AppLayout>
        <Section>
          <SectionBlock>
            <SubRedditFilter />
          </SectionBlock>
        </Section>
        <Section>
          <SectionBlock>
            <PostList subReddit={subReddit} />
          </SectionBlock>
        </Section>
      </AppLayout>
    </RedditProvider>
  );
}

export default Home

