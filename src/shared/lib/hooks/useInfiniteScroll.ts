import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
  callback?: () => void;
}

export function useInfiniteScroll(props: UseInfiniteScrollOptions) {
  const { callback, triggerRef, wrapperRef } = props;

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;
    let observer: IntersectionObserver | null = null;
    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.disconnect();
      }
    };
  }, [wrapperRef, triggerRef, callback]);
}
