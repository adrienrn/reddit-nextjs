import {useState, useRef, } from 'react';
import cx from 'classnames';

import {useOutsideClick} from 'state/Hooks';

import styles from './style.css';

export default function({className, open, title, children, ...props})
{
  const [isOpen, setOpen] = useState(open || false);

  // Handle closing the dropdown; hook-style.
  const wrapperRef = useRef();
  useOutsideClick(wrapperRef, (event) => {
    setOpen(false);
  });

  return (
    <div
      className={cx(styles['dropdown'], className, {
        [styles['dropdown--active']]: isOpen,
      })}
      ref={wrapperRef}>
      <button className={styles['dropdown__toggle']} onClick={(event) => setOpen(!isOpen)}>
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 21l-12-18h24z"/>
        </svg>
      </button>
      <div className={styles['dropdown__sheet']}>
        <div className={styles['dropdown__block']}>
          {children}
        </div>
      </div>
    </div>
  );
}
