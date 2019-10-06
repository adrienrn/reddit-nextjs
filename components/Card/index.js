import React from 'react';
import cx from 'classnames';

import styles from './style.css';

export function Card({ children, className })
{
  return (<div className={cx(styles['card'], className)}>{children}</div>);
}

export function CardBlock({ children, className, })
{
  return (<div className={cx(styles['card__block'], className)}>{children}</div>);
}

export function CardElement({ children, className, })
{
  return (<div className={cx(styles['card__element'], className)}>{children}</div>);
}

export function CardTitle({ children, className, })
{
  return (
    <h3 className={cx(styles['card__element'], styles['card__element--title'], className)}>
      {children}
    </h3>
  );
}
