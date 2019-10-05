import {useState, useEffect} from 'react';

import PostList from 'components/PostList';
import {ensureKeyProp} from 'components/Utils/Passthru';

import {useApiClient, useApiRequest} from 'providers/RedditProvider';

export default function({ subReddit })
{
  const {data, loading, error, refetch} = useApiRequest({
    subReddit: subReddit,
  });

  useEffect(() => {
    refetch();
  }, [subReddit]);

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  if (error) {
    return (
      <div>Error</div>
    );
  }

  return (
    <>
      {data ? (
        <div>
          <PostList posts={ensureKeyProp(data, 'postList', 'id')} />
        </div>
      ) : null}
    </>
  );
}
