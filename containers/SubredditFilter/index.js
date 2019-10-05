import {useEffect} from 'react';

import SubredditFilter from 'components/SubredditFilter';
import {useStoreValue} from 'providers/StoreProvider';

export default function() {
  const [store, dispatch] = useStoreValue();

  const activeSubReddit = store.allSubReddits.filter((subReddit) => (store.subReddit === subReddit.slug));

  return (
    <SubredditFilter activeSubReddit={activeSubReddit.length ? activeSubReddit[0] : null} subReddits={store.allSubReddits} />
  );
}
