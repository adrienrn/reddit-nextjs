import React from 'react';
import cx from 'classnames';

import styles from './style.css';

export function Gallery({ children, className })
{
  return (<ul className={cx(styles['gallery'], className)}>{children}</ul>);
}

export function GalleryItem({ children, className, })
{
  return (<li className={cx(styles['gallery__item'], className)}>{children}</li>);
}
