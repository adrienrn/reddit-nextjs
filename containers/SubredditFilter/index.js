import {useEffect} from 'react';

import SubredditFilter from 'components/SubredditFilter';
import {useStoreValue} from 'providers/StoreProvider';

export default function({ activeSubReddit }) {
  const [store, dispatch] = useStoreValue();
  return (
    <SubredditFilter
        activeSubReddit={store.subReddit}
        subReddits={store.subReddits}
    />
  );
}
