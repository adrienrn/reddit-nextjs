import cx from 'classnames';

export default function(WrappedComponent, baseClassName) {
  return ({ className, ...restOfProps }) => {
    return (
      <WrappedComponent className={cx(baseClassName, className)} {...restOfProps} />
    );
  };
}

export function ensureKeyProp(items, baseKey, field)
{
  return items.map((item) => {
    item.key = baseKey + '--' + item[field];

    return item;
  })
}
