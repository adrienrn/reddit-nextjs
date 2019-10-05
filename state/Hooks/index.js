import {useEffect, useRef,} from 'react';

export function usePrevious(value)
{
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export function useOutsideClick(ref, outsideClickHandler)
{
  // Call given callback if reauired.
  function handleClick(event) {
    if (!ref.current || ref.current.contains(event.target) && 'A' !== event.target.tagName) {
      return;
    }

    outsideClickHandler(event);
  }

  // Register the event handler and remove it on cleanup.
  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [ref, outsideClickHandler]);
}
