import cx from 'classnames';

import styles from './style.css';

export default function({ avatarUrl, name, subtitle }) {
  return (
    <div className={styles['user-widget']}>
      <div className={styles['user-widget__block']}>
        <div className={cx(styles['user-widget__element'], styles['user-widget__element--img'])}>
          <img src={avatarUrl} />
        </div>
      </div>
      <div className={styles['user-widget__block']}>
        <p className={cx(styles['user-widget__element'], styles['user-widget__element--title'])}>
          {name}
        </p>
        <p className={cx(styles['user-widget__element'], styles['user-widget__element--subtitle'])}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
