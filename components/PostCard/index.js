import cx from 'classnames';

import styles from './style.css';

function truncateText(text, length, ellipsisChar = '...')
{
  if (text.length <= length) {
    return text;
  }

  return text.slice(0, length) + ellipsisChar;
}

function PostExternalLink({ children, className, href })
{
  return (
    <a
      className={className}
      href={href.slice(0, 1) === '/' ? 'https://reddit.com' + href : href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  )
}

export default function({media, permalink, selftext, thumbnail, title, url})
{
  return (
    <div className={styles['card']}>
      <PostExternalLink
        className={cx(styles['card__block'], styles['card__block--img'])}
        href={permalink}
      >
        {thumbnail && 'default' !== thumbnail ? (
          <img src={thumbnail} />
        ) : (
          <div className={
            cx(styles['card__element'], styles['card__element--img-placeholder'])
          } />
        )}
      </PostExternalLink>
      <div className={cx(styles['card__block'], styles['card__block--main'])}>
        <h3 className={cx(styles['card__element'], styles['card__element--title'])}>
          <PostExternalLink href={permalink}>
            {truncateText(title, 45)}
          </PostExternalLink>
        </h3>
        {selftext ? (
          <p className={cx(styles['card__element'], styles['card__element--text'])}>
            {truncateText(selftext, 120)}
          </p>
        ) : (
          <a className={cx(styles['card__element'])} href={url} target='_blank' rel='noopener noreferrer'>
            {truncateText(url, 50)}
          </a>
        )}
      </div>
    </div>
  );
}
