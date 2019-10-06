import PostCard from 'components/PostCard';
import {Gallery, GalleryItem} from 'components/Gallery';

import styles from './style.css';

export default function({ posts })
{
    return (
      <Gallery>
        {posts.map((post) => {
          return (
            <GalleryItem key={post.key}>
              <PostCard {...post} />
            </GalleryItem>
          );
        })}
      </Gallery>
    );
}
