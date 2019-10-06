import ButtonPrimary from 'components/ButtonPrimary';
import {Card, CardBlock, CardElement, CardTitle} from 'components/Card';

import {useStoreValue} from 'providers/StoreProvider';

import styles from './style.css';

export default function({ label, slug, })
{
  const [store, dispatch] = useStoreValue();

  return (
    <Card>
      <CardBlock className={styles['card__block--main']}>
        <CardTitle>
          {label}
        </CardTitle>
      </CardBlock>
      <CardBlock className={styles['card__block--actions']}>
        <CardElement>
          <ButtonPrimary
            onClick={(event) => {
              dispatch({type: 'SUBREDDIT_REMOVE', subReddit: {slug: slug}})
            }
          }>
            {'Remove'}
          </ButtonPrimary>
        </CardElement>
      </CardBlock>
    </Card>
  );
}
