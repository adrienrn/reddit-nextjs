import React from 'react'
import Head from 'next/head'

import AppLayout from 'components/App/Layout';
import {Section, SectionBlock} from 'components/Section';
import SubRedditSearch from 'components/SubRedditSearch';

import SubRedditList from 'containers/SubRedditList';

const Subscriptions = () => (
  <React.Fragment>
    <Head>
      <title>Subscriptions</title>
    </Head>

    <AppLayout>
      <Section>
        <SectionBlock>
          <SubRedditSearch />
        </SectionBlock>
      </Section>
      <Section>
        <SectionBlock>
          <SubRedditList />
        </SectionBlock>
      </Section>
    </AppLayout>
  </React.Fragment>
)

export default Subscriptions
