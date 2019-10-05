export default function({ className }) {
  return ({ children }) => {
    return (
      <div className={className}>
        {children}
      </div>
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
