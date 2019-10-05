import PostCard from 'components/PostCard';

import styles from './style.css';

export default function({ posts })
{
    return (
      <ul className={styles['gallery']}>
        {posts.map((post) => {
          return (
            <li key={post.key} className={styles['gallery__item']}>
              <PostCard {...post} />
            </li>
          );
        })}
      </ul>
    );
}
