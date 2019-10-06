import {useState,} from 'react';

import {useApiClient} from 'providers/RedditProvider';
import {useStoreValue} from 'providers/StoreProvider';

export default function()
{
  const [store, dispatch] = useStoreValue();
  const [client] = useApiClient();
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);

  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault();
        client.searchSubReddit({q: searchValue}).then((data) => {
          setResults(data);
        });
      }}>
        <input
          onChange={(event) => {
            setSearchValue(event.currentTarget.value);
          }}
          type="text"
          value={searchValue}
        />
        <button type='submit'>
          Search
        </button>
      </form>
      <ul>
        {results.map((result) => (
          <li>
            {result.title}
            <button onClick={(event) => {
              dispatch({type: 'SUBREDDIT_ADD', subReddit: {label: result.display_name, slug: result.display_name}});
            }}>
              Join
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
