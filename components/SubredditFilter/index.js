import {useState} from 'react';
import cx from 'classnames';

import AppLink from 'components/AppLink';
import Dropdown from 'components/Dropdown';

import styles from './style.css';

export default function({ activeSubReddit, subReddits })
{
    return (
      <div className={cx(styles['dropdown-wrapper'])}>
        <IconHighlight />
        <Dropdown className={styles['dropdown']} title={activeSubReddit && activeSubReddit.label || '-'}>
          <ul className={styles['nav']}>
            {subReddits.map((subReddit, index) => (
              <li key={'subReddit--' + index} className={styles['nav__item']}>
                <AppLink href={`/?subReddit=${subReddit.slug}`}>
                  <a className={styles['nav__link']}>
                    {subReddit.label}
                  </a>
                </AppLink>
              </li>
            ))}
          </ul>
        </Dropdown>
      </div>
    );
}

function IconHighlight()
{
  return (
    <svg viewBox="0 0 36 35" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
          <linearGradient x1="-5.88854167%" y1="-33.6035507%" x2="90.86875%" y2="100.282472%" id="linearGradient-1">
              <stop stopColor="#26D0CE" offset="0%"></stop>
              <stop stopColor="#1A2980" offset="100%"></stop>
          </linearGradient>
      </defs>
      <g id="Dev_Challenge" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Desktop-HD" transform="translate(-739.000000, -170.000000)" fill="url(#linearGradient-1)">
              <g id="Sheets-/-Bottom-Sheet" transform="translate(360.000000, 128.000000)">
                  <g id="List-/-Single-Line-/-Avatar" transform="translate(361.000000, 33.000000)">
                      <g id="IMAGE" transform="translate(18.000000, 9.000000)">
                          <polygon id="Star" points="18 27 6.83208021 34.998291 11.1299992 21.7999992 0 13 13.7600002 13 18 0 22.2400017 13 36 13 24.8699989 21.7999992 29.1679198 34.998291"></polygon>
                      </g>
                  </g>
              </g>
          </g>
      </g>
    </svg>
  );
}
