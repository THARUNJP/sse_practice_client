import { useEffect, useRef, useState } from "react";

const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -80px 0px",
};

export function useInfiniteScroll() {
  const loaderRef = useRef(null);
  const initialRenderRef = useRef(true);
  const [loadMore, setLoadMore] = useState<boolean>(false);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];

    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    if (entry.isIntersecting) {
      setLoadMore(true);
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

  return { loaderRef, loadMore, setLoadMore };
}
