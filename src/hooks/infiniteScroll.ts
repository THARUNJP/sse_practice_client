import { useEffect } from "react";

const options = {
  root: null, // use the document's viewport as the root
  rootMargin: "0px", // no margin
  threshold: 0.5, //
};
export function useInfiniteScroll() {
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    console.log(entries);
  };
  useEffect(() => {
   const observer = new IntersectionObserver(handleIntersection, options);
  }, []);
}
