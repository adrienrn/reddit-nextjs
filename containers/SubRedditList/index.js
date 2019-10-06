import {useState, useEffect} from 'react';

import SubRedditList from 'components/SubRedditList';
import {ensureKeyProp} from 'components/Utils/Passthru';

import {useApiClient, useApiRequest} from 'providers/RedditProvider';
import {useStoreValue} from 'providers/StoreProvider';

export default function({ subReddit })
{
  const [store, dispatch] = useStoreValue();

  return (
    <>
      <SubRedditList subReddits={ensureKeyProp(store.subReddits, 'subRedditList', 'slug')} />
    </>
  );
}
