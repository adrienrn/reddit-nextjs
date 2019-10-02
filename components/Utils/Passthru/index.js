export default function({ className }) {
  return ({ children }) => {
    return (
      <div className={className}>
        {children}
      </div>
    );
  };
}
