import cx from 'classnames';

import styles from './style.css';

export default function({ children, className, ...props })
{
  return (
    <button className={cx(styles['button'], className)} {...props}>
      {children}
    </button>
  );
}
