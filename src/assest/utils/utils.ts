import { RefObject, useEffect } from 'react';

export const getTime = (time: string) => {
  return new Date(time).toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const trasformDate = (d: string) => {
  const date = new Date(d);

  return date
    .toLocaleString('uk-UK', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    })
    .replace(/ о /, ':')
    .toUpperCase();
};

export const useOutsideClick = (
  ref: RefObject<HTMLElement> | undefined,
  handler?: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (!handler) return;

      if (
        event.target === document.getElementsByTagName('html')[0] &&
        event.clientX >= document.documentElement.offsetWidth
      )
        return;

      if (!ref?.current || ref.current.contains(event.target)) {
        return;
      }

      handler();
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, handler]);
};
