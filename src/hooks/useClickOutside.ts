import { MutableRefObject, RefObject, useEffect } from 'react';

export default function useClickOutside(
  wrapper: RefObject<HTMLDivElement>,
  onClickOutside: () => void,
  wrapperId: string,
) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if ((wrapper as MutableRefObject<HTMLDivElement>).current.contains(e.target as Node)) return;
      const wrapperElm = document.getElementById(wrapperId);

      if (wrapperElm && wrapperElm.contains(e.target as Node)) return;

      onClickOutside();
    }

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside, wrapper, wrapperId]);
}
