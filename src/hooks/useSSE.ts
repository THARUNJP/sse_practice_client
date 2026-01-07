import { useEffect, useState } from "react";

export default function useSSE() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8000/events");

    eventSource.onmessage = (event: MessageEvent) => {
      console.log(event.data, "event");
    };

    eventSource.addEventListener("counter", (e) => {
      const { count } = JSON.parse(e.data);
      setCount(count)
    });

    eventSource.onerror = (err: unknown) => {
      console.log(err, "err");
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return { count };
}
