import styles from './style.css';

import {Gallery, GalleryItem} from 'components/Gallery';
import SubRedditCard from 'components/SubRedditCard';

export default function({ subReddits })
{
  return (
    <Gallery>
      {subReddits.map((subReddit) => {
        return (
          <GalleryItem key={subReddit.key}>
            <SubRedditCard {...subReddit} />
          </GalleryItem>
        );
      })}
    </Gallery>
  );
}
