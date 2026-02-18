import { useEffect, useRef } from "react";

const options = {
  root: null, // use the document's viewport as the root
  threshold: 0,
  rootMargin: "10px",
};
export function useInfiniteScroll(onLoadMore: any) {
  const loaderRef = useRef(null);
  const initialRenderRef = useRef(true);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];

    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    if (entry.isIntersecting) {
      console.log("Load more");
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(loaderRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return loaderRef;
}
