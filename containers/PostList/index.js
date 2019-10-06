import {useState, useEffect} from 'react';

import PostList from 'components/PostList';
import ButtonPrimary from 'components/ButtonPrimary';
import {ensureKeyProp} from 'components/Utils/Passthru';
import {Section, SectionBlock} from 'components/Section';

import {useApiClient, useApiRequest} from 'providers/RedditProvider';
import {useStoreValue} from 'providers/StoreProvider';

export default function({ subReddit })
{
  const [store, dispatch] = useStoreValue();
  const {data, loading, error, refetch} = useApiRequest({
    filters: {},
    limit: 5,
    subReddit: store.subReddit ? store.subReddit.slug : null,
  });

  useEffect(() => {
    refetch();
  }, [store.subReddit]);

  return (
    <Section>
      {loading ? (
        <SectionBlock>
          Loading...
        </SectionBlock>
      ) : null}
      {error ? (
        <SectionBlock>
          Error
        </SectionBlock>
      ) : null}
      {data ? (
        <>
          <SectionBlock>
            <PostList posts={ensureKeyProp(data, 'postList', 'id')} />
          </SectionBlock>
          <SectionBlock>
            <ButtonPrimary>
              Load more
            </ButtonPrimary>
          </SectionBlock>
        </>
      ) : null}
    </Section>
  );
}
